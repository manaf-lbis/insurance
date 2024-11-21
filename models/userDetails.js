const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    vehicleRegNo:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:String,
        required:true,
        trim: true
    },
    insuranceType:{
        type:String,
        enum:['Two_Wheeler','Three_Wheeler','Four_Wheeler']
    },
    insuranceStarting:{
        type:Date,
        default:Date.now
    },
    insuranceExpiry: {
        type: Date,
        default: function() {
            const currentDate = new Date();
            currentDate.setFullYear(currentDate.getFullYear() + 1); 
            return currentDate;
        }
    }
});


// Create the model from the schema
const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;