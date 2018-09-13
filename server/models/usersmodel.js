const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let User = new Schema(
    {
        email: { type: String, required: [ true, 'Укажите email' ]},
        password: String,
        results:[{testId: String, 
                  result: Number
                  }]
    },{ timestamps: { createdAt: 'created_at' }}
    );

let user = mongoose.model('User', User);
module.exports = user;