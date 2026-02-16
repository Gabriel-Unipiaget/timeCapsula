require("dotenv").config();
const app = require("./src/app");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongo conectado");
        
        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });

    })
    .catch(err => console.error(err));