const mongoose = require("mongoose");
const MONGOURI =
  "mongodb+srv://user1:user123@cluster0.kgdbrmi.mongodb.net/coursesDB?retryWrites=true&w=majority";

const InitiateMongoServer = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await mongoose.connect(MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log("Connected to DB!");
      resolve();
    } catch (e) {
      console.log(e);
      reject();
      throw e;
    }
  });
};

module.exports = InitiateMongoServer;
