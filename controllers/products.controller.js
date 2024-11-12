const ProductRouter = require("express").Router();
// description=return  all the products
ProductRouter.get("/", function (req, res) {
  return res.status(200).json({
    message: "products successful",
  });
});

module.exports = ProductRouter;
