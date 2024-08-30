const mongoose = require('mongoose');


mongoose
  .connect("mongodb://127.0.0.1:27017/auth-db")
    .then(() => {
        console.log("MongoDB Connected...");
    })
    .catch((err) => {
        console.log("MongoDB Connection Error: ", err);
    });