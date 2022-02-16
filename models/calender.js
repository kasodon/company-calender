 const mongoose = require('mongoose');


 const CompanySchema = new mongoose.Schema({
     type: {
         type: String,
         required: [true, 'must provide company type'],
     },
     statutory_meeting: {
         type: {},
         required: [true, 'must provide ...'],
     },
     annual_general_meeting: {
        type: {},
        required: [true, 'must provide ...'],
    }
 });


 module.exports = mongoose.model('Company', CompanySchema);