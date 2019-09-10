var mongoose = require('mongoose');
var Worklog = require('../models/Worklog.js');

module.exports = {
    addWorklog: async (worklogObj) => {
        var worklog = new Worklog(worklogObj);
        await worklog.save();
        return worklog;
    },

    removeWorklog: async (worklogId) => {
        var existingWorklog = await Worklog.findById(worklogId);
        if(!existingWorklog){
            return null;
        }
        await existingWorklog.remove();
        return true;
    },

    editWorklog: async (worklogId, newStartTime, newEndTime) => {
        var existingWorklog = await Worklog.findById(worklogId);
        if(!existingWorklog){
            return null;
        }
        existingWorklog.startDateTime = newStartTime;
        existingWorklog.endDateTime = newEndTime;
        await existingWorklog.save();

        return existingWorklog;
    },

    getWorklogsPerProject: async (projectId) => {
        var result = await Worklog.find({
            'project': { $in: [
                mongoose.Types.ObjectId(projectId)
            ]}
        });

        var logs = [];
        result.forEach((log) => {
            var timeDiff = log.endDateTime.getTime() - log.startDateTime.getTime();
            var hours = Math.abs(Math.round(timeDiff / (1000 * 60 * 60)));
            
            var newLog = {
                "_id": log._id,
                "project": log.project,
                "startDateTime": log.startDateTime,
                "endDateTime": log.endDateTime,
                "numberOfHours": hours
            }

            logs.push(newLog);
        });

        return logs;
    },

    getProjectWorkingHours: async (projectId) => {
        var result = await Worklog.find({
            'project': { $in: [
                mongoose.Types.ObjectId(projectId)
            ]}
        });

        var projectHours = 0;
        result.forEach((log) => {
            var timeDiff = log.endDateTime.getTime() - log.startDateTime.getTime();
            var hours = Math.abs(Math.round(timeDiff / (1000 * 60 * 60)));
            projectHours += hours;
        });
        
        return projectHours;
    }
}