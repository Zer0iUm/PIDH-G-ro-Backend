const path = require('path')
const express = require('express')
const app = express()
app.use(express.json())
const routes = require('./routes/index')

app.use(routes)

// instanciando como view engine
app.set("view engine", "ejs")
// instanciando pasta vies
app.set("views", path.resolve("src", "views"))
// liberando acesso a pasta public
app.use(express.static(path.resolve("public")))

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
})