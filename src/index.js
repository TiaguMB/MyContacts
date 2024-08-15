const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
	console.log('#### Error Handler');
	response.sendStatus(500);

	next(error);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
