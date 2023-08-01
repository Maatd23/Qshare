const OrderController = require("../controllers/orderController");
const UserController = require("../controllers/userController");
const { authentication } = require("../middleware/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.use(authentication);
router.get("/orders", OrderController.getOrder);
router.post("/orders", OrderController.addOrder);
module.exports = router;
