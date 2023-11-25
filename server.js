const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/comments')

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/comments', async (req, res) => {
    const results = await db.createComment(req.body);
    res.status(201).json({ id: results[0] });
})

app.get('/comments', async (req, res) => {
    const comments = await db.getAllComments();
    res.status(200).json({ comments });
})

app.patch('/comments/:id', async (req, res) => {
    const id = await db.editComment(req.params.id, req.body);
    res.status(200).json({ success: true });
})

app.delete('/comments/:id', async (req, res) => {
    const comment = await db.deleteComment(req.params.id);
    res.status(204).json({ success: true });
})

app.listen(3000, () => console.log(`Server started and running on ${PORT}`));