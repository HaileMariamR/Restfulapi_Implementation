import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export const contactSchema = new Schema({
    firstName :{
        type:String
    },
    lastName :{
        type:String
    },
    email :{
        type:String
    },
    company :{
        type:String
    },
    phoneNumber :{
        type:Number
    },
    createdDate:{
        type : Date,
        default:Date.now
    }

})

