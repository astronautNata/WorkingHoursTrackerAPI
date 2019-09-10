var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController.js');

router.post('/register', async (req, res) => {
    // Create a new user
    try {
        var result = await userController.registerUser(req.body);
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/login', async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body;
        var result = await userController.loginUser(email, password);
        if(!result){
            return res.status(401).send({error: 'Login failed! Check authentication credentials'});
        }
        res.send(result)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router