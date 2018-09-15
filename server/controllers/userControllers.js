const mongoose = require('mongoose');
const db = require('../models/usersFunctions');
mongoose.set('useFindAndModify', false);
const  passport = require('passport');


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
        .catch(err => {console.log(err); res.status(400).json({err: err.message})})
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

module.exports.loginUser = function (req, res) {
    console.log(req);
    // console.log(req.user);
    return res.status(401).json({err: 'Укажите правильный логин и пароль!'});

    /*passport.authenticate('loginUsers', (err, user) => {
        if (err) {
            return next(err);
        }
        console.log(err, user);
        if (!user) {
            console.log('Укажите правильный логин и пароль!');
            return res.status(401).json({err: 'Укажите правильный логин и пароль!'});
        }
        req
            .logIn(user, function (err) {
                if (err) {
                    console.log(err);
                    res.sendStatus(401)
                }
                let payload = {
                    id: user._id
                };
                console.log('payload: ', payload);
                let token = jwt.encode(payload, config.secret); // line 10 passport-config
                res.json({token: token});
            });
    })(req, res, next);*/
};