import Router from 'express';
import TodoList from '../../models/todo-list.js';

const route = Router();

export default app => {
	app.use('/todo_lists', route);

	route.get('/', async (req, res) => {
        const lists = await TodoList.find();
        
		return res.json(lists);
	});

	route.post('/', async (req, res) => {
        const {title} = req.body;

        if (!title) return res.json({error: 'Please provide a title'});

		const list = new TodoList({ title });

		list.save();

		return res.json(list);
	});

	route.delete('/:id', async (req, res) => {
		const list = await TodoList.findById(req.params.id);

		if(list) list.remove();

		// TODO: deletes all child todo items

		return res.json(list);
	});
};
