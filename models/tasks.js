const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  taskId: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  points: {
    type: Number,
  },
  status: {
    type: String,
  },
  deadline: {
    type: Date,
  },
});

module.exports = mongoose.model("Tasks", tasksSchema);
