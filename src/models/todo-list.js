import mongoose from 'mongoose';

const todoListSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please enter a title']
		},

		isStarred: {
			type: Boolean,
			default: false
		},

		todoItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TodoItem' }]
	},
	{ timestamps: true }
);

const TodoList = mongoose.model('TodoList', todoListSchema);

export default TodoList;
