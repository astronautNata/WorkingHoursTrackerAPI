var express = require('express');
var router = express.Router();
var projectController = require('../controllers/ProjectController.js');
var auth = require('../middleware/auth.js');

router.post('/addProject', auth, async (req, res) => {
    try{
        const {projectName} = req.body;
        var result = await projectController.addProject(req.user._id, projectName);
        res.status(201).send(result);
    } catch(error){
        res.status(400).send(error);
    }
});

router.post('/editProject', auth, async (req, res) => {
    try{
        const { projectId, newName } = req.body;
        var result = await projectController.editProject(projectId, newName);
        if(!result){
            return res.status(401).send({error: 'Invalid project id'});
        }
        res.status(201).send(result);
    } catch(error){
        res.status(400).send(error);
    }
});

router.get('/getAllProjects', auth, async (req, res) => {
    try{
        var result = await projectController.getAllProject(req.user._id);
        res.status(201).send(result);
    } catch(error){
        res.status(400).send(error);
    }
});

router.delete('/removeProject/:projectId', auth, async (req, res) => {
    try{
        var result = await projectController.removeProject(req.params.projectId);
        if(!result){
            return res.status(401).send({error: 'Invalid project id'});
        }
        res.status(201).send("Success");
    } catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;