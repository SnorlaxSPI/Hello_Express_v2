// formato ecma6
import express from 'express';

import { router } from './src/routes/routes.js';
import bodyParser from 'body-parser';
import { log } from './src/middlewares/log.js';
import './src/database/connect.js';

const app = express();

// o app.use na verdade está injetando um middleware
app.use(bodyParser.json());

app.use(log);

app.use(router);

app.listen(3000);

export { app };