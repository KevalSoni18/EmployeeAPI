var mongoose = require('mongoose')
var express = require('express')
var route = require('./routes')

const db = "mongodb+srv://KevalSoni:KevalSoni@cluster0.rcfn8.mongodb.net/Employee?retryWrites=true&w=majority"

var bodyParser =require('body-parser')
mongoose.connect(db).then(()=>{
    console.log('DB Connected')

    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.listen(3000,()=>{
        console.log('server started')
    })
}).catch((e)=>{
    console.log(e.toString())
})
