const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')
const { promisify } = require('util')



module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'Token not provided.' })
    }

    const [, token] = authHeader.split(' ')

    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) return res.status(401).send({ error: 'Token invalid.' });

      if (decoded.role === "manager") {
        return res.status(403).send({ error: 'Acess unauthorized.' });
      }

      next();
    });

}