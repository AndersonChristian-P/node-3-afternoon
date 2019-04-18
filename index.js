require("dotenv").config()
const express = require("express")
const massive = require("massive")
const productCtrl = require("./products_controller")

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance)
  app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`)
  })
})
  .catch(err => {
    console.log(err)
  })

app.get("/api/products", productCtrl.getAll)
app.get("/api/products/:id", productCtrl.getOne)
app.put("/api/products/:id", productCtrl.update)
app.post("/api/products", productCtrl.create)
app.delete("/api/products/:id", productCtrl.delete)
