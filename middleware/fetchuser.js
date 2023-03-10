var jwt = require('jsonwebtoken');
const JWT_SECRET = "HelloWorl$d"


const fetchuser = (req, res, next) => {
    // Get user from jwt token and add id to req object
    const token = req.auth-token
    if (!token) {
        res.status(401).send({ error: "Please enter a valid token = ", token })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next()
    } catch (error) {
        res.status(401).send({ error: "Please authenciate using a valid token id" })
    }
}


module.exports = fetchuser
