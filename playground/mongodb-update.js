// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log('Unable To Connect To MongoDB');
  }
  console.log('Connected To MongoDB Server');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b83ca658e1297f1a6b2fe1b')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{returnOriginal:false}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    // _id: new ObjectID('5b83ca658e1297f1a6b2fe1b')
    name:'Ali'
  },{
    $set:{
      name:'Nader',
      location:'karaj'
    },
    $inc:{
      age:3
    }
  },{returnOriginal:false}).then((result) => {
    console.log(result);
  });
  // db.close();
});
