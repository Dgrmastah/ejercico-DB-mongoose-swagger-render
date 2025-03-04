const express = require('express');
const Task = require('../models/Task');

const router = express.Router();


router.post('/create', async (req, res) => {
  const { title } = req.body;
  try {
    const task = new Task({ title });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.put('/id/:_id', async (req, res) => {
  const { _id } = req.params;
  const { title } = req.body;
  
  try {
    const task = await Task.findByIdAndUpdate(_id, { title }, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.delete('/id/:_id', async (req, res) => {
  const { _id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(_id);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
