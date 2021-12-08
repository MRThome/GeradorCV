const express = require('express')
const app = express()
require('dotenv').config()
require("./src/config/db")

const routes = require("./src/routes")


require ("./src/middlewares")(app)
app.use("/", routes)

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor conectado na porta 3000,")
})
