var mongoose = require("mongoose");
var Worklog = require('./Worklog.js');

var ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

ProjectSchema.pre('remove', function(next) {
    Worklog.remove({'project': this._id}).exec();
    console.log("removed worklogs");
    next();
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;