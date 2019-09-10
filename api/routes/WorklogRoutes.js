var express = require('express');
var router = express.Router();
var worklogController = require('../controllers/WorklogController.js');
var auth = require('../middleware/auth.js');

router.post('/addworklog', auth, async (req, res) => {
    try{
        var result = await worklogController.addWorklog(req.body);
        res.status(201).send(result);
    } catch(error){
        res.status(400).send(error);
    }
});

router.delete('/removeWorklog/:worklogId', auth, async (req, res) => {
    try{
        var result = await worklogController.removeWorklog(req.params.worklogId);
        if(!result){
            return res.status(401).send({error: 'Invalid worklog id'});
        }
        res.status(201).send("Success");
    } catch(error){
        res.status(400).send(error);
    }
});

router.post('/editWorklog', auth, async (req, res) => {
    try{
        const {worklogId, newStartTime, newEndTime} = req.body;
        var result = await worklogController.editWorklog(worklogId, newStartTime, newEndTime);
        if(!result){
            return res.status(401).send({error: 'Invalid worklog id'});
        }
        res.status(201).send(result);
    } catch(error){
        res.status(400).send(error);
    }
});

router.get('/getProjectWorklogs/:projectId', auth, async (req, res) => {
    try{
        var result = await worklogController.getWorklogsPerProject(req.params.projectId);
        res.status(201).send(result);
    } catch(error){
        res.status(400).send(error);
    }
});

router.get('/getProjectWorkingHours/:projectId', auth, async (req, res) => {
    try{
        var result = await worklogController.getProjectWorkingHours(req.params.projectId);
        res.status(201).send({projectWorkingHours: result});
    } catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;