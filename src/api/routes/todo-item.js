import Router from 'express';
import TodoItem from '../../models/todo-item.js';

const route = Router();

export default app => {
	app.use('/todo_items', route);

	route.get('/', async (req, res) => {
        const todos = await TodoItem.find();
        
		return res.json(todos);
    });

    route.post('/', async (req, res) => {
        const {title} = req.body;

        if (!title) {
            // throw new Error('no title provided');
            return res.json({error: 'Please provide a title'});
        }

		const todo = new TodoItem({ title });

		todo.save();

		return res.json(todo);
	});
    
    route.get('/:id', async (req, res) => {        
        const todo = await TodoItem.findById(req.params.id);
        
        return res.json(todo);
    });

    route.post('/:id/complete', async(req, res) => {
        const todo = await TodoItem.findById(req.params.id);

        todo.isComplete = !todo.isComplete;

        await todo.save();

        return res.json(todo);
    })
};
