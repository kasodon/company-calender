const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const data = require('./company.json');



// middleware
app.use(express.static('./public'))
app.use(express.json())

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

router.post('/company', (req, res) => {
   // res.json(private)
   if (req.body.company_type === "public") {
      // console.log(`${date}`);
      const stat = () => {
         const date = new Date(req.body.date_incorporated);
         return date.setDate(date.getDate() + data[0].statutory_meeting.days);
       };
      //  console.log(`${stat()}`);
      const agm = () => {
         const date = new Date(req.body.date_incorporated);
         return date.setDate(date.getDate() + data[0].annual_general_meeting.days);
       };
      //  console.log(`${agm()}`);
      const bod = () => {
         const date = new Date(req.body.date_incorporated);
         return date.setDate(date.getDate() + data[0].board_of_directors.days);
       };
      //  console.log(`${bod()}`);
      const returns = () => {
         const date = new Date(req.body.date_incorporated);
         return date.setDate(date.getDate() + data[0].annual_returns.days);
       };
      //  console.log(`${returns()}`);
      return res.json(
         {
         statutory_meeting: stat(),
         annual_general_meeting: agm(),
         board_of_directors: bod(),
         annual_returns: returns()
      }
      );
   }
   if (req.body.company_type === "private") {
      // console.log(`${date}`);
      const stat = () => {
         const date = new Date(req.body.date_incorporated);
         return date.setDate(date.getDate() + data[1].statutory_meeting.days);
       };
      //  console.log(`${stat()}`);
      const agm = () => {
         const date = new Date(req.body.date_incorporated);
         return date.setDate(date.getDate() + data[1].annual_general_meeting.days);
       };
      //  console.log(`${agm()}`);
      const bod = () => {
         const date = new Date(req.body.date_incorporated);
         return date.setDate(date.getDate() + data[1].board_of_directors.days);
       };
      //  console.log(`${bod()}`);
      const returns = () => {
         const date = new Date(req.body.date_incorporated);
         return date.setDate(date.getDate() + data[1].annual_returns.days);
       };
      //  console.log(`${returns()}`);
      return res.json(
         {
            statutory_meeting: stat(),
            annual_general_meeting: agm(),
            board_of_directors: bod(),
            annual_returns: returns()
         }
      );
   }
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
