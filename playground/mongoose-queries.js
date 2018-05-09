const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5af2f6cf3908392c78907cbe';
var idUser = '5af26c5ca9591e4974ffe842';

if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
}

if (!ObjectID.isValid(idUser)) {
	console.log('Document ID for User is not valid');
}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(idUser).then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

// 1. query works, no user
// 2. user found
// 3. handle errors