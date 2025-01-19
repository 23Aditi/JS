require('dotenv').config();
const MongoClient = require('mongodb').MongoClient()
const URL = process.env.MONGODB_URI;

function CreateDB(){
    MongoClient.connect(URL,function(err,db){
        if(err) throw err;
        console.log("DB created Successfully !!!");
        db.close();
    })
}
