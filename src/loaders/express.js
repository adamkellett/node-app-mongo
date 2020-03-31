import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../api/index.js';

export default app => {
	// The magic package that prevents frontend developers going nuts
	// Alternate description:
	// Enable Cross Origin Resource Sharing to all origins by default
	app.use(cors());

	// Middleware that transforms the raw string of req.body into json
	app.use(bodyParser.json());

	// Load API Routes
	app.use('/api', routes());
};
