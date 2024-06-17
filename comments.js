// Create web server
// Create a comments array to store all the comments
// Create a POST route /comments
// Read the comment from the request body
// Add the comment to the comments array
// Send the updated comments array as the response
// Create a GET route /comments
// Send the comments array as the response

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const comments = [];

app.post("/comments", (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comments);
});

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
// Now you can test the server using Postman or curl. First, start the server by running node comments.js. Then, send a POST request to http://localhost:3000/comments with a JSON payload like { "comment": "Hello, world!" }. Finally, send a GET request to http://localhost:3000/comments to see the comment you added. You should see something like ["Hello, world!"].