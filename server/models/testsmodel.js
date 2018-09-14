const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TestSchema = new Schema(
    {   m: { type: String, required: [ true, 'Укажите название модуля' ]},
        testname: { type: String, required: [ true, 'Укажите название теста' ]},
        questions: Array

    }
);

let testsModel = mongoose.model('Test', TestSchema);
module.exports = testsModel;