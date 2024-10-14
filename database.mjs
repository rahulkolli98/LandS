//importing mysql
import mysql from 'mysql2'

// This is to create a pool for the database connection */
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Oswaldiit@22',
    database: 'lands'
}).promise()

/* this is an other way to pull in all the users in the table 
 const result = await pool.query("Select * from user_registration")
 const rows = result[0]
 console.log(rows)
*/

// This function is to get all the users data */
async function getUsers(){
    const[rows] = await pool.query("Select * from user_registration")
    return rows
}

const users = await getUsers()
console.log(users)


