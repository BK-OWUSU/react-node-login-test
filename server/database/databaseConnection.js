import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()


const connectionPool =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'react_node'
})

export default connectionPool;  // export the connection pool
