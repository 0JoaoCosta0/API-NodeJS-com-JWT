const express = require("express");
const routes = express.Router();

const controllers = require('./controllers')

const authMiddleware = require('./middlewares/auth')
const managerMiddleware = require('./middlewares/authManager')

routes.get("/products", authMiddleware, controllers.ProductController.index);
routes.get("/products/:id", managerMiddleware, controllers.ProductController.show);
routes.post("/products", controllers.ProductController.store);
routes.put("/products/:id", controllers.ProductController.update);
routes.delete("/products/:id", controllers.ProductController.destroy);

routes.post('/users', controllers.UserController.store)

routes.post('/sessions', controllers.SessionController.store)

routes.get('/teste', managerMiddleware, (req, res) => res.json({ ok: true }))

module.exports = routes;