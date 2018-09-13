const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Module = new Schema(
    {
        modulename: { type: String, required: [ true, 'Укажите название модуля' ]},
        moduletests:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Test'
        }]
    }
);

module.exports = mongoose.model('Module', Module);