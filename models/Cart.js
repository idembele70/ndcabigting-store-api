const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: number, default: 1 },
      },
    ],
  },
  { timestamps: true } // if set to true automatically creates the createdAt and updatedAt field
);

module.exports = mongoose.model('Cart', CartSchema);
