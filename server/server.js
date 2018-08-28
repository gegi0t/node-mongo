var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res) => {
  var todo = new Todo({
    text: req.body.text,
    Completed:req.body.Completed,
    CompletedAt:req.body.CompletedAt
  });
  todo.save().then((doc) => {
    res.send(doc)
  },(e)=>{
    res.status(400).send(e)
  });
});
//----------------------
app.post('/users',(req,res) => {
  var user = new User({
    email: req.body.email,
  });
  user.save().then((doc) => {
    res.send(doc)
  },(e)=>{
    res.status(400).send(e)
  });
});
//----------------------
app.get('/todos',(req,res) => {
  Todo.find().then((doc) => {
    res.send({doc})
  },(e) => {
    res.status(400).send(e);
  });
});
app.listen(3000,()=>{
  console.log('Started ...');
})
// var newTodo = new Todo({
//   text:'This is a test'
// });
//
// newTodo.save().then((result) => {
//   console.log('save Todo',result);
// },(e) => {
//   console.log('Unable to Save Todo');
// });
