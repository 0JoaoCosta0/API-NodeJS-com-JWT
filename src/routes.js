const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserController");
const SessionController = require('./controllers/SessionController')

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

module.exports = routes;