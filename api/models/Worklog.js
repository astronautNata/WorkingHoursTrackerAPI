var mongoose = require("mongoose");

var WorkLogSchema = new mongoose.Schema({
    startDateTime: {
        type: Date,
        required: true
    },
    endDateTime: {
        type: Date,
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    }
});

const Worklog = mongoose.model('Worklog', WorkLogSchema);

module.exports = Worklog;