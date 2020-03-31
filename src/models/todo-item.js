import mongoose from 'mongoose';

const todoItemSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please enter a title']
		},

		isComplete: {
			type: Boolean,
			default: false
		},

		todoList: { type: mongoose.Schema.Types.ObjectId, ref: 'TodoList' }
	},
	{ timestamps: true }
);

const TodoItem = mongoose.model('TodoItem', todoItemSchema);

export default TodoItem;
