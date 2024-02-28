const mongoose = require("mongoose");

const connectMongodb = async () => {
  try {
    await mongoose
      .connect(process.env.CONNECTION_URL)
      .then(() => console.log("Database connection successfull."));
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectMongodb;
