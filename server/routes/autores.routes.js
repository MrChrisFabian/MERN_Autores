const express = require("express");

const { createNewautor, deleteautorById, getAllautors, getOneautorById, updateautor } = require('../controllers/autor.controller')

const AutoresRouter = express.Router();

AutoresRouter.post("/", createNewautor);
AutoresRouter.get("/", getAllautors);
AutoresRouter.get("/:id", getOneautorById);
AutoresRouter.put("/:id", updateautor)
AutoresRouter.delete("/:id", deleteautorById)
module.exports = AutoresRouter;