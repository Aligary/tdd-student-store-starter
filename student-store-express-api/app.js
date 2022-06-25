// YOUR CODE HERE
const express = require("express")
const morgan = require("morgan")
const router = require("./Routes/Store")
const { NotFoundError } = require("./Utils/Errors")
const cors = require('cors')


const app = express()

app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use("/store", router)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requeseted-With, Content-Type, Accept");
  next()
})

app.get("/", async(req, res, next) => {
  res.status(200).json({"ping": "pong"})
})

//handle 404 errors
app.use((req, res, next) => {
  return next(new NotFoundError())
})

//Generic Error handler
app.use((error, req, res, next) => {
  const status = error.status || 500
  const message = error.message

  return res.status(status).json({
      error: {message, status}
  })
})

module.exports = app