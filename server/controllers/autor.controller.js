const AutoresModel = require('../models/autor.model');

module.exports = {
    createNewautor: (req, res) => {
        AutoresModel.create(req.body)
            .then(newlyCreatedautor => res.status(201).json({ autor: newlyCreatedautor }))
            .catch(err => res.status(400).json({ message: "Something went wrong creating the autor", error: err })
            );
    },
    getAllautors: (req, res) => {
        AutoresModel.find()
            .then((allautors) => res.status(200).json({ autor: allautors }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    getOneautorById: (req, res) => {
        AutoresModel.findOne({ _id: req.params.id })
            .then((OneElement) => res.status(200).json({ autor: OneElement }))
            .catch((err) => res.status(400).json({ message: "Algo no funciono correctamente", error: err }))
    },
    updateautor: (req, res) => {
        AutoresModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }) // si no le ponemos el new:true te devuelve el anterior
            .then((Updatedautor) => res.json({ autor: Updatedautor }))
            .catch((err) =>
                res.status(400).json({ message: "Algo no funciono como se esperaba", error: err }))
    },
    deleteautorById: (req, res) => {
        AutoresModel.deleteOne({ _id: req.params.id })
            .then((result) => res.json({ result: result }))
            .catch((err) => res.json({ message: 'Algo no funciono correctamente :(', error: err }))
    },
}