const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/tasks')

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/tasks', async (req, res) => {
    const results = await db.createTask(req.body);
    res.status(201).json({ id: results[0] });
})

app.get('/tasks', async (req, res) => {
    const tasks = await db.getAllTasks();
    res.status(200).json({ tasks });
})

app.patch('/tasks/:id', async (req, res) => {
    const id = await db.editTask(req.params.id, req.body);
    res.status(200).json({ success: true });
})

app.delete('/tasks/:id', async (req, res) => {
    const comment = await db.deleteTask(req.params.id);
    res.status(204).json({ success: true });
})

app.listen(3000, () => console.log(`Server started and running on ${PORT}`));