const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const AutorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Por Favor minimo 3 caracteres en el Nombre del Autor"],
        maxlength: [50, "Máximo 50 caracteres en el Nombre del Autor"]
    },
}, {
    timestamps: true,
});

AutorSchema.plugin(uniqueValidator)
const AutorModel = mongoose.model('autor', AutorSchema);

module.exports = AutorModel;