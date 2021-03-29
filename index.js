import express from 'express'
import { routes} from './src /routes/indexroute'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

var path = require('path');

const app = express();
const PORT = 4500 ;
mongoose.Promise =global.Promise;
mongoose.connect('mongodb://localhost/restfulapidb',{
    useNewUrlParser:true,
    useUnifiedTopology:true

});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


routes(app);

app.get('/' ,(req, response)=>{
    response.send(`node and express server is running at port ${PORT}`)

}).listen(PORT,()=>{
    console.log('running'); 
});



