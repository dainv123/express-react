import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'

import { BookRoute } from './api/book'
import { AuthenRoute } from './api/authen'
import { DB_CONFIG, KEYS } from './constants'

const app = express()

const accessTokenSecret = KEYS.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = KEYS.REFRESH_TOKEN_SECRET;

app.listen(
  DB_CONFIG.PORT, 
  console.log(`SERVER LISTENING ON PORT: ${DB_CONFIG.PORT}`)
)

app.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
)

AuthenRoute({
  app, 
  accessTokenSecret,
  refreshTokenSecret
});

BookRoute({ 
  app 
})




// export const addNewTask = async task => {
//   const db = await connectDB()
//   const collection = db.collection('tasks')
  
//   await collection.insertOne(task)
// }

// export const updateTask = async task => {
//   const { group, name, isComplete, id } = task;

//   const db = await connectDB()
//   const collection = db.collection('tasks')

//   if (group) {
//     await collection.updateOne({id}, {$set: {group}})
//   }

//   if (name) {
//     await collection.updateOne({id}, {$set: {name}})
//   }

//   if (isComplete !== undefined) {
//     await collection.updateOne({id}, {$set: {isComplete}})
//   }
// }

// app.post('/task/new', async (req, res) => {
//   const task = req.body.task
  
//   await addNewTask(task)

//   res.status(200).send()
// })

// app.post('/task/update', async (req, res) => {
//   const task = req.body.task
  
//   await updateTask(task)

//   res.status(200).send()
// })