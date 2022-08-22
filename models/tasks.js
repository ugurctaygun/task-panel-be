const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  taskId: {
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
    type: String,
  },
});

module.exports = mongoose.model("Tasks", tasksSchema);
