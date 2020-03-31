import config from './config/index.js';
import express from 'express';
import fs from 'fs';
import http from 'http';
import https from 'https';
import loaders from './loaders/index.js';

async function startServer() {
	const app = express();

	await loaders({ expressApp: app });

	const httpsOptions = {
		key: fs.readFileSync('./key.pem'),
		cert: fs.readFileSync('./cert.pem'),
		passphrase: 'pass123'
	};

	const httpServer = http.createServer((req, res) => {
		const { host } = req.headers;

		//Strip out port number
		var hostname = host.match(/:/g) ? host.slice(0, host.indexOf(':')) : host;

		// Redirect all non-HTTPS requests to HTTPS
		res.writeHead(301, {
			Location: `https://${hostname}:${config.securePort}${req.url}`
		});

		res.end();
	});

	const httpsServer = https.createServer({ ...httpsOptions }, app);

	httpServer.listen(config.port);
	httpsServer.listen(config.securePort);
}

startServer();
