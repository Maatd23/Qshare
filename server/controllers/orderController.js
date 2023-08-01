const { Order } = require("../models");

class OrderController {
  static async getOrder(req, res, next) {
    const { id } = req.user;
    try {
      const Orders = await Order.findAll({
        where: { CostumerId: id },
      });

      res.status(200).json(Orders);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = OrderController;
