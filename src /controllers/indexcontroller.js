import mongoose from 'mongoose'
import  { contactSchema} from '../models/indexmodel'
const Contact = mongoose.model('contact' , contactSchema);  
export const createUser = (req,res)=>{
    let newContact = new Contact(req.body);

    newContact.save((err,user)=>{
        if (err){
            res.send(err)
        };
        res.json(user);
    });
}

export const getUser = (req,res)=>{
    Contact.find({}, (err,user)=>{
        if (err){
            res.send(err)
        };
        res.json(user);
    });

}
export const getUserwithId = (req,res)=>{
    Contact.findById(req.params.conatactID, (err,user)=>{
        if (err){
            res.send(err)
        };
        res.json(user);
    });

}
