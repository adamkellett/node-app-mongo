import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';

export default async ({ expressApp }) => {
	await mongooseLoader();
    console.log('✌️ DB loaded and connected!');
    
    await expressLoader(expressApp);
    console.log('✌️ Express loaded');
};
