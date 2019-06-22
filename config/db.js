const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('mongoDB connected..');
  } catch (error) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log('mongoDB connected'))
//   .catch((err) => {
//     console.log(err.message);
//     process.exit(1);
//   });
