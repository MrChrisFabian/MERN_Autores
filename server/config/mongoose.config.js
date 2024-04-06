const mongoose = require("mongoose");
const db_name = "base_de_Autores";

mongoose.connect(`mongodb://localhost/${db_name}`)
    .then(() => { console.log(`Conexión Establecida con el servidor ${db_name}`) })
    .catch((err) => { console.log(`La conexión Falló con el servidor ${db_name}`, err) })