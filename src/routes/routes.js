import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { delete_controller } from '../controllers/Delete_Controller.js';
import { get_controller } from '../controllers/Get_Controller.js';
import { get_id_controller } from '../controllers/Get_id_Controller.js';
import { Post_controller } from '../controllers/Post_Controller.js';
import { put_controller } from '../controllers/Put_Controller.js';

const router = Router();

export const clients = [];

router.get('/clients', get_controller);

router.get('/clients/:id', get_id_controller);

router.post('/clients', Post_controller);

router.put('/clients/:id', put_controller);

router.delete('/clients/', delete_controller);

export { router };

