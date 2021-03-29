import { createUser , getUser , getUserwithId , updateUser , deleteUser} from '../controllers/indexcontroller'


export const routes = (app)=>{

  app.route('/contact')
       .get((req, res , next)=>{
           console.log(`request from ${req.originalUrl}`);
           console.log(`request method ${req.method}`);
           next();
       }, getUser)
       .post(createUser);
    app.route('/contact/:conatactID')
       .get(getUserwithId)
       .put(updateUser)
       .delete(deleteUser);

}


