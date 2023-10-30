const express = require("express");
const morgan = require("morgan");
const project = require('./components/routes/project.route');
const task = require('./components/routes/task.route');
const users = require('./components/routes/user.route');
const app = express();
app.use(express.json());
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
// app.use(morgan("combined"));
// app.use(
//   morgan(":method :url :status :res[content-length] - :response-time ms")
// );
 
const corsOptions = {
  "origin": "*",
  optionsSuccessStatus: 200
}



// const cors = require('cors');


const notfount = '404 Page Not Found'


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use('/project', project);
app.use('/task', task);
app.use('/users', users);

app.get('/', (req, res) => {
  res.status(200).json('Sample Node API Version1')
 
})

app.get('*', (req, res) => {
  res.status(404)
  res.send(`<center><h1> ${notfount}<h1></center>`);
});
// app.use(cors());


const port = 3000;
const hostname = '127.0.0.1';
//const port = 3000;




app.listen(port, () => {
  
  console.log(`app listening on port ${hostname}:${port}`);
});
