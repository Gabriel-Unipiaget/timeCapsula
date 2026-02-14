require("dotenv").config();
const app = require("./src/app");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongo conectado");
        app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
    })
    .catch(err => console.error(err));