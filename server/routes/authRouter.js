import express from 'express';
const router = express.Router();
import userService from '../service/userService.js';


router.post('/register', userService.register)

router.post('/login', userService.login)

router.get('/home', userService.verifyToken, userService.home);

export default router
