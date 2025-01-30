import db from '../database/databaseConnection.js'

const existByEmail = async(email) => {
    const [record] = await db.query("SELECT * FROM users WHERE email = ?", [email])
    const isFound = record.length > 0;
    return {isFound, record};
}

const existById = async(id) => {
    const [record] = await db.query("SELECT * FROM users WHERE id = ?", [id])
    const isFound = record.length > 0;
    return {isFound, record};
}

const existByUsername = async(username) => {
    const [record] = await db.query("SELECT * FROM users WHERE username = ?", [username])
    return record.length > 0;
}

const findById = async(id) => {
    const [record] = await db.query("SELECT * FROM users WHERE id = ?", [id])
    return record.length > 0;  
}

const registerUser = async(username, email, password) => {
    const [record] = await db.query("INSERT INTO users(username, email, password) VALUES(?,?,?)", [username, email, password])
    return record.affectedRows;
}
const updateUser = async(id, username, email, password) => {
    const [record] = await db.query("UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?", [username, email, password, id])
        return record.affectedRows;
}
const deleteUser = async(id) => {
    const [record] = await db.query("DELETE FROM users WHERE id = ?", [id])
    return record.affectedRows;
    }
    
export default {existByEmail, existById, existByUsername, findById, registerUser, updateUser, deleteUser}