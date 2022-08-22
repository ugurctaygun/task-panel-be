const express = require("express");
const router = express.Router();
const Tasks = require("../models/tasks");

//Get Task State
router.get("/", async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create Task
router.post("/", async (req, res) => {
  const task = new Tasks({
    title: req.body.title,
    description: req.body.description,
    points: req.body.points,
    status: req.body.status,
    deadline: req.body.deadline,
  });
  try {
    const newTask = await task.save();
    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete Task
router.delete("/:id", getTask, async (req, res) => {
  try {
    await res.task.remove();
    res.json({ message: "Deleted Task" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Update Task
router.patch("/:id", getTask, async (req, res) => {
  if (req.body.title !== null && req.body.title !== undefined) {
    res.task.title = req.body.title;
  }
  if (req.body.description !== null && req.body.description !== undefined) {
    res.task.description = req.body.description;
  }
  if (req.body.points !== null && req.body.points !== undefined) {
    res.task.points = req.body.points;
  }
  if (req.body.status !== null && req.body.status !== undefined) {
    res.task.status = req.body.status;
  }
  if (req.body.date !== null && req.body.date !== undefined) {
    res.task.date = req.body.date;
  }
  try {
    const updatedTask = await res.task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: res.task });
  }
});

async function getTask(req, res, next) {
  let task;
  try {
    task = await Tasks.findById(req.params.id);
    if (task == null) {
      return res.status(400).json({ message: "Can not find task" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.task = task;
  next();
}

module.exports = router;
