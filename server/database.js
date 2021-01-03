const mongoose = require('mongoose');
// Environment Variables
require('dotenv').config();

// Environment Variables
// const {
//     MONGO_HOSTNAME,
//     MONGO_DB,
//     MONGO_PORT
// } = process.env;

// const dbConnectionURL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;


// mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0
};

// Setup connection to Remote MongoDB at mLab
// Using useNewUrlParser to bypass deprecation warning
mongoose.connect(process.env.MONGO_URI, options)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(`Error connecting: ${process.env.MONGO_URI} with ${err}`));
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connect err:'));

