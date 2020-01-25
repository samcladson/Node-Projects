const express = require("express");
const app = express();

// to get user input value and parse it as json and send the request
app.use(express.json());

// arry for using as example
const details = [
  { id: 1, name: "Sam Cladson", age: 19, city: "Tiruppur" },
  { id: 2, name: "Jeevan", age: 22, city: "Coimbatore" },
  { id: 3, name: "Raghul", age: 19, city: "Eroad" },
  { id: 4, name: "Venkatesh", age: 20, city: "Coimbatore" }
];

// get function to get the response and echo on browser
app.get("/", (req, res) => {
  res.send("Hello World");
});

// get function to send the request and get the response and echo on browser
app.get("/api/details", (req, res) => {
  res.send(details);
});

// querying the responce
app.get("/api/details/:id", (req, res) => {
  const data = details.find(c => c.age === parseInt(req.params.id));
  if (!data) {
    res.status(404).send("Not Found.");
  } else {
    res.send(data);
  }
});

// post function to post the data
app.post("/api/details/addData", (req, res) => {
  const data1 = {
    id: details.length + 1,
    name: req.body.name,
    age: req.body.age,
    city: req.body.city
  };
  details.push(data1);
  res.send(data1);
});

// setting up environment variable
const port = process.env.PORT || 3000;

// connecting to server
app.listen(port, err => {
  if (!err) {
    console.log(`Listening in port ${port}`);
  } else {
    console.log("Error occured :" + err);
  }
});
