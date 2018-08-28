var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minLength:1,
    trim:true
  },
  Completed:{
    type:Boolean,
    default:false
  },
  CompletedAt:{
    type:Number,
    default:0
  }
});
// var otherTodo = new Todo({
//   text:' End This Sample    '
// });
// otherTodo.save().then((doc) => {
//   console.log(doc,undefined,2);
// },(e) => {
//   console.log('Unable to Save Todo',e);
// });

module.exports = {
  Todo
};
