// formato ecma6
import express from 'express';

import { router } from './src/routes/routes.js';
import bodyParser from 'body-parser';
import { log } from './src/middlewares/log.js';
import { get_controller } from './src/controllers/Get_Controller.js';
import { get_id_controller } from './src/controllers/Get_id_Controller.js';
import { get_delete } from './src/controllers/delete_controller.js';
import { Post_controller } from './src/controllers/Post_Controller.js';

const app = express();

// o app.use na verdade está injetando um middleware
app.use(bodyParser.json());


app.use(log);

//app.use(get_controller);
//app.use(get_id_controller);
//app.use(get_delete);
//app.use(Post_controller);

app.use(router);


app.listen(3000);

export { app };