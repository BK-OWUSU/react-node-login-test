import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5000
import cors from 'cors'
import authRouter from './routes/authRouter.js'
import connectionPool from './database/databaseConnection.js'

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
//Routes
app.use('/auth', authRouter)
//Error handling
app.use((err, req, res, next)=> {
    console.error(err.stack)
    res.status(500).send('Internal Server Error')
})

connectionPool.query("SELECT 1").then(()=> {
    console.log('Database connected')
    app.listen(port , ()=> console.log('> Server is up and running on port: ->' + port));
}).catch(()=> console.log("Database connection failed"));
