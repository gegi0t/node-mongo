const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id ='5b845a63e8dd05c02cc3d49e';
var user_id='5b8511630991eab41aa1e68f';
User.findById(user_id).then((doc) => {
  if(!doc){
    return console.log('Unbale To Find');
  }
  console.log(JSON.stringify(doc,undefined,2));
},(e) => {console.log(e);});

// if(!ObjectID.isValid(id)){
//   console.log('Id Not Found');
// };
//
// // Todo.find({
// //   _id:id
// //   // Completed:false
// // }).then((todos) => {
// //   console.log('Todos :',todos);
// // });
// // Todo.findOne({
// //   _id:id
// //   // Completed:false
// // }).then((todo) => {
// //   console.log('Todo :',todo);
// // });
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Not Found');
//   }
//   console.log('Todo Find By Id  :',todo);
// }).catch((e)=>console.log(e));
