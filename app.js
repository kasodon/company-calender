const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const public = require('./public.json');
const private = require('./private.json');


// middleware
app.use(express.static('./public'))
app.use(express.json())

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/company', (req, res) => {
   // res.json(private)
   if (req.body.type === "public") {
      return res.json(public);
   }
   if (req.body.type === "private") {
      return res.json(private);
   }
   console.log(req.body.date)
   });

// routes
app.use("/", router);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI)
       app.listen(port, console.log(`Server is listening on ${port}...`))
    } catch (error) {
       console.log(error) 
    }
}

start();
