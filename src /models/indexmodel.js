import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export const contactSchema = new Schema({
    firstName :{
        type:String,
        required:true
    },
    lastName :{
        type:String,
        required:true

    },
    email :{
        type:String,
        required: true 

    },
    company :{
        type:String,
        required:true 

    },
    phoneNumber :{
        type:Number,
        required:true

    },
    createdDate:{
        type : Date,
        default:Date.now
    }

})

