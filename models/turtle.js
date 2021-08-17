let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let turtleSchema = new Schema( {
    name: {type: String}
})

module.exports = mongoose.model('Turtle', turtleSchema, 'Turtles');

