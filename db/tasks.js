const knex = require('./knex');

function createTask(task) {
    return knex('tasks').insert(task);
}

function getAllTasks() {
    return knex('tasks').select('*');
}

function deleteTask(id) {
    return knex('tasks').where('id', id).del();
}

function editTask(id, task) {
    return knex('tasks').where('id', id).update(task);
}

module.exports = {
    createTask,
    getAllTasks,
    deleteTask,
    editTask
}