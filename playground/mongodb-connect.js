// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log('Unable To Connect To MongoDB');
  }
  console.log('Connected To MongoDB Server');
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result) => {
  //   if(err){
  //     return console.log('Unable To Inset To MongoDB');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  // ------------------------
  // db.collection('Users').insertOne({
  //   // _id:001,
  //   name:'Ali',
  //   age:26,
  //   location:'Tehran'
  // },(err,result) => {
  //   if(err){
  //     return console.log('Unable To Inset To MongoDB');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  //----------------------------
  // db.collection('Users').insert([{
  //   name:'Ali',
  //   age:26,
  //   location:'Tehran'
  // },{
  //   name:'Nader',
  //   age:30,
  //   location:'Tehran'
  // }],(err,result) => {
  //   if(err){
  //     return console.log('Unable To Inset To MongoDB');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  db.close();
});
