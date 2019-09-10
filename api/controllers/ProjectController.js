var mongoose = require('mongoose');
var Project = require('../models/Project.js');

module.exports = {
    addProject: async (userId, projectName) => {
        var projectObj = {user:userId, name: projectName};
        const project = new Project(projectObj);
        await project.save();
        return project;
    },

    editProject: async (projectId, newName) => {
        const project = await Project.findById(projectId);
        if(!project){
            return null;
        }
        project.name = newName;
        var savedProject = await project.save();
        return savedProject;
    },

    getAllProject: async (userId) => {
        var projects = await Project.find({
            'user': { $in: [
                mongoose.Types.ObjectId(userId)
            ]}
        });
        return projects;
    },

    removeProject: async (projectId) => {
        var project = await Project.findById(projectId);
        if(!project){
            return null;
        }
        //remove all logs first
        await project.remove();
        return true;
    }
}