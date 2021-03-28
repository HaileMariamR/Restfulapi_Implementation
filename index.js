import express from 'express'
const app = express()
const PORT = 4500;
app.get('/' ,(req, response)=>{
    response.send(`node and express server is running at port ${PORT}`)


}).listen(PORT,()=>{
    console.log('running');
})