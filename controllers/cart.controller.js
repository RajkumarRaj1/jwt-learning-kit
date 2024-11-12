const CartRouter = require("express").Router();
// description=return  all the carts
CartRouter.get("/", function (req, res) {
    return res.status(200).json({
      message: "carts successful",
    });
});
module.exports = CartRouter;
