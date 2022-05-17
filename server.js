const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.port || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const routes = require('./routes');
app.use(routes);


mongoose.connect(process.env.MONGODB_URL||'mongodb://localhost:27017/socialMediaDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set("debug", true);
app.listen(port,()=> console.log('Server is running on port '+port))