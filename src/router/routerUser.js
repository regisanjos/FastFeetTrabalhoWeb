const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const routes = Router();
const controller = new UsuarioController();


routes.post("/signIn", controller.singIn);

routes.post("/signOut", ensureAuthenticated, controller.signOut);

//CRUD

// Exporta
module.exports = routes;