import userRepository from '../repository/userRepository.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const JWT_SECRET = "9c2e24c5c4cf6c3e06219b13857f18402cc47d101d0bbb5d187cffd8a4d227edda575798be3f26f01cec811bcfe42340bed4efd3afb46ca32e3d207cbd677b2f";

const register = async (req, res)=> {
    const {username, email, password} = req.body;
    const result = await userRepository.existByEmail(email);
    if (result.isFound) {
        return res.status(200).json({message: 'Email already exists', email: email})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userRepository.registerUser(username, email, hashedPassword);
    res.status(201).json({message: username +` registered successfully`, user: user});
}

const login = async(req, res) => {
    const {email, password} = req.body;
    const result = await userRepository.existByEmail(email);
    //Checking if user with exist
    if (!result.isFound) {
        return res.status(401).json({message: 'Email not found', email: email})
    }
    //Checking if found user password is correct
    const user = result.record[0];
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({message: 'Invalid password'})
        }
    //Generating token for found user
    const token = jwt.sign({id: user.id}, JWT_SECRET,{expiresIn: '1h'});
    res.status(200).json({message: 'Logged in successfully', token: token});
}

//Function to verify Token
const verifyToken = async (req, res, next) => {
    try {
        const token = req.header('Authorization').split(" ")[1];
    if (!token) {
        return res.status(401).json({message: 'Access denied. No token provided.'});
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(500).json({message: "server error"});
    }    
}

const home = async(req, res) => {
    try {
        const id = req.userId
        const results = await userRepository.existById(id);
        if (!results.isFound) {
            return res.status(401).json({message: 'User not found'})
        }
        const user = results.record[0];
        res.status(200).json({user: user});
    } catch (error) {
        res.status().json({message: "Server Error :)"})
    }
}

export default {register, login, home, verifyToken};