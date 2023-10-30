const mongoose = require('mongoose')

var Schema = mongoose.Schema;

const dbcon = require('../models/db')

const taskSchema = new Schema({
    task_name: {
        type: String,
        required: true
    },
    task_status: {
        type: String,
        required: true,
        default: 'pending'
        
    },
    Start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true,
    },
    descripition: {
        type: String,
        required: true,
    },
})

const TaskModel = mongoose.model("Task", taskSchema);
module.exports = TaskModel;