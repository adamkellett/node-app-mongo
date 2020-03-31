import Router from 'express';
import todoItem from './routes/todo-item.js';
import todoList from './routes/todo-list.js';
import user from './routes/user.js';

export default () => {
    const app = Router();

    user(app);
    todoItem(app);
    todoList(app);

    return app;
}