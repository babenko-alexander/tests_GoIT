const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TestSchema = new Schema(
    {
        testname: { type: String, required: [ true, 'Укажите названир теста' ]},
        questions:[{question: String,
                    answers: [String],
                    rightAnswer: String
        }]
    }
);

let testModel = mongoose.model('Test', TestSchema);
module.exports = testModel;