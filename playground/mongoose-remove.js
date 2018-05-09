const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5af31c2609d34f83fee0d756'}).then((todo) => {

// });

Todo.findByIdAndRemove('5af31c2609d34f83fee0d756').then((todo) => {
	console.log(todo);
});
