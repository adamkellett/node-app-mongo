import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Please enter a username'],
			index: true
		},

		email: {
			type: String,
			lowercase: true,
			unique: true,
			index: true
		},

		password: String,

		salt: String,

		role: {
			type: String,
			default: 'user'
		}
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
