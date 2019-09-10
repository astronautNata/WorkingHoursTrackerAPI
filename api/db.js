
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
  });