const express = require ('express');
const bodyparser = require ('body-parser');

const router = require ('./routes/users.js');

const app=express();
const PORT=5000;

app.use(bodyparser.json());

app.use('/users',router);
app.get('/',(req,res)=>res.send('Welocome to Home Page'));
app.all('*',(req,res)=>res.send('Error 404 Page not Found'));

app.listen(PORT,()=>console.log(`Express Server Running at ${PORT}`));