const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photo:{
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  deliverMethod: {
    type: String,
    enum: ['pickup', 'deliver'],
    required: true,
  },
  sellStatus: {
    type: String,
    enum: ['sell', 'sold'],
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
