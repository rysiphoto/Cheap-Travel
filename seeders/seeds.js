let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/cheapTravel", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let journalSeed = [
    {
        author: "mason",
        body: "asdf",
        price: 55,
        depCity: "St.Louis",
        arrCity: "Denver",
        date: new Date(Date.now())
    },    {
        author: "mason2",
        body: "asdf2",
        price: 525,
        depCity: "St.Louis",
        arrCity: "Denver",
        date: new Date(Date.now())
    }
]

db.Travel.remove({})
  .then(() => db.Travel.collection.insertMany(journalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
