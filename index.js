import userRoute from './components/routes/userRoutes'
import TaskRoute from './components/routes/taskRoutes'
import ProjectRoute from './components/routes/projectRoutes'


const express = require("express");





const app = express();
app.use(express.json());

const port = 3000;
const hostname = '127.0.0.1';
//const port = 3000;

app.use('/user',userRoute);
// app.use('/task',TaskRoute)
// app.use('/project',ProjectRoute)

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.end("Hello World121!");
});

app.get("/status", (request, response) => {
  const status = {
     "Status": "Running"
  };
  response.status(200)
  response.send(status);
});



app.listen(port, () => {
  console.log(`app listening on port ${hostname}:${port}`);
});
