const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TestSchema = new Schema(
    {
        testname: { type: String, required: [ true, 'Укажите название теста' ]},
        questions:[{question: String,
                    answers: [String],
                    rightAnswer: String
        }],
        moduleId: {type: String, required: [ true, 'Укажите название модуля' ]}
    }
);

let testsModel = mongoose.model('Test', TestSchema);
module.exports = testsModel;