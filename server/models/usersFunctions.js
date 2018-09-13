const User_model = require('./usersmodel');

module.exports.gets = function () {
    return User_model.find()
};

module.exports.getById = function (paramsId) {
    return User_model.findById(paramsId)
};

module.exports.add = function (data) {
    let User = new User_model({
        email: data.email,
        password: data.password,
        results:[]
    });

    return User.save()
};

module.exports.update = function (data, paramsId) {
    let updatedUser = {
        results: data.results
    };

    return User_model.findByIdAndUpdate( paramsId, { $set: updatedUser }, {new: true})
};

module.exports.delete = function (paramsId) { return User_model.findByIdAndRemove(paramsId) };
