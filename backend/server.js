const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/userRouter.js');

const app  = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../frontend')));
app.use('/user',router);

app.get('/user',);

app.post('/user',);

app.get('/user/:id',);

app.put('/user/:id',);

app.delete('/user/:id',);








mongoose.connect('mongodb://localhost:27017/User').then(()=>{
    console.log("Database connect");
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is running on http://localhost:3000`);
    })
});