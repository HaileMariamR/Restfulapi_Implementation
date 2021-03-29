import { createUser , getUser } from '../controllers/indexcontroller'


export const routes = (app)=>{

  app.route('/contact')
       .get((req, res , next)=>{
           console.log(`request from ${req.originalUrl}`);
           console.log(`request method ${req.method}`);
           next();
       }, getUser)
       .post(createUser);
    app.route('/contact/:conatactID')
       .put((req, res)=>{
         res.send('put request Successfully')
       })
       .delete((req, res)=>{

        res.send('delete request Successfully')
       });

}

