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
  static async addOrder(req, res, next) {
    const { productName, stock, price } = req.body;
    const { id } = req.user;
    try {
      const newOrder = {
        productName,
        stock,
        price,
        userId: id,
      };
      const order = await Order.create(newOrder);

      res.status(201).json({ message: `New order has been created` });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = OrderController;
