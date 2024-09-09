const mongoose = require('mongoose')
const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get("/login", function(req,res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
    
app.get("/register", function(req,res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", function(req,res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})

mongoose.set("strictQuery", false);
const mongoURI = process.env.MONGODB_URI;
// const mongoURI = "mongodb://localhost:27017/inotebook"

async function run() {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB!")
  } catch (error) {
    console.error("Failed to connect to Mongo :", error);
  }
}
run();
