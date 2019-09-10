var dotenv = require('dotenv').config();
var express = require('express');
var userRoutes = require('./api/routes/UserRoutes.js');
var projectRoutes = require('./api/routes/ProjectRoutes.js');
var worklogRoutes = require('./api/routes/WorklogRoutes.js');
require('./api/db.js');

app = express();
port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);
app.use(projectRoutes);
app.use(worklogRoutes);

app.listen(port, () => {
    console.log('Work hours api started on port: ' + port);
});
