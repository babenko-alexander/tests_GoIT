const mongoose = require('mongoose');
const db = require('../models/usersFunctions');
mongoose.set('useFindAndModify', false);

module.exports.getUsers = function (req, res) {
    db.gets().then(results => res.json(results))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.getUser = function (req, res) {
    db.getById(req.params.id)
        .then(results => results ? res.json(results) : res.status(404).json({err: 'User not found'}))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.addUser = function (req, res) {
    db.add(req.body)
        .then(results => res.status(201).json(results))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.editUser = function (req, res) {
    db.update(req.body, req.params.id)
        .then(results => results ? res.json(results) : res.status(400).json({err: 'User not found'}))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.deleteUser = function (req, res) {
    db.delete(req.params.id)
        .then(results => results ? res.json(results) : res.status(400).json({err: 'User not found'}))
        .catch(err => res.status(400).json({err: err.message}))
};