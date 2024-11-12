const jwt = require('jsonwebtoken'); 
const {SECRET_KEY }=require("../jwt.util");

function validateToken(req, res, next) {
  try {
    if (req.headers["token"]) {
      const isValid = jwt.verify(req.headers["token"],SECRET_KEY);
      if (isValid) {
        next()
      } else {
        return res.status(403).json({
          message: "Invalid token",
        });
      }
    }
  } catch (error) {
    return res.status(401).json({
      error: error.message,
      message: "Token expires",
    });
  }
}
module.exports = {
  validateToken,
};
