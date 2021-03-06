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

export const updateUser = (req,res)=>{
    Contact.findOneAndUpdate({_id:req.params.conatactID},req.body,{ new:true,   useFindAndModify:false  }, (err,user)=>{
        if (err){
            res.send(err)
        };
        res.json(user);
    });

}
export const deleteUser = (req,res)=>{
    Contact.remove({_id:req.params.conatactID}, (err,user)=>{
        if (err){
            res.send(err)
        };
        res.json({message: "successfully deleted contact"}); 
    });

}

