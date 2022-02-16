 const Company = require('../models/calender');
 const asyncWrapper = require('../middleware/async');
 
 const getAllData = asyncWrapper(
    async(req, res) => {
            const calender = await Company.find({});
            res.status(200).json({calender})
    }
 )



 module.exports = {
     getAllData
 }