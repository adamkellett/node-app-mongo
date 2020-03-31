import Router from 'express';
import User from '../../models/user.js';

const route = Router();

export default app => {
	app.use('/users', route);

	route.get('/', async (req, res) => {
        const users = await User.find();
        
		return res.json(users);
	});

	route.post('/', async (req, res) => {
		const user = new User({ username: 'userTest' });

		user.save();

		return res.json(user);
	});
};
