// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log('Unable To Connect To MongoDB');
  }
  console.log('Connected To MongoDB Server');
  // db.collection('Todos').find({_id:new ObjectID('5b830ef2145f470c303bd11e')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) =>{
  //   console.log('Unable to find !');
  // });
  db.collection('Todos').find().count().then((count) => {
    console.log('Todos');
    console.log(JSON.stringify(count,undefined,2));
  },(err) =>{
    console.log('Unable to find !');
  });
  db.collection('Users').find({name:'Ali'}).count().then((count) => {
    console.log('Users');
    console.log(JSON.stringify(count,undefined,2));
  },(err) =>{
    console.log('Unable to find !');
  });
  db.close();
});
