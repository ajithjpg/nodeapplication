const mongoose = require('mongoose')

var Schema = mongoose.Schema;

const dbcon = require('../models/db')

const projectSchema = new Schema({
    project_name: {
        type: String,
        required: true
    },
    project_status: {
        type: String,
        required: true,
        default: 'pending',
        
    },
    Start_date: {
        type: String,
        required: true

    },
    end_date: {
        type: String,
        required: true,
     

    },
    project_manager: {
        type: String,
        required: true,
    },
    team_member: {
        type: Array,
        required: true,
      

    },
    descripition: {
        type: String,
        required: true,
    },
})

const projectModel = mongoose.model("project", projectSchema);
module.exports = projectModel;