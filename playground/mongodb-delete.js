// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log('Unable To Connect To MongoDB');
  }
  console.log('Connected To MongoDB Server');
  // db.collection('Todos').deleteMany({text:'eat launch'}).then((result) => {
  //   console.log(result);
  //
  // });
  // db.collection('Todos').deleteOne({text:'eat launch'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    console.log(result);
  });
  // db.close();
});
