const knex = require('./knex');

function createComment(comment) {
    return knex('comments').insert(comment);
}

function getAllComments() {
    return knex('comments').select('*');
}

function deleteComment(id) {
    return knex('comments').where('id', id).del();
}

function editComment(id, comment) {
    return knex('comments').where('id', id).update(comment);
}

module.exports = {
    createComment,
    getAllComments,
    deleteComment,
    editComment
}