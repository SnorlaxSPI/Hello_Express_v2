import { Router } from 'express';
import { delete_controller } from '../controllers/Delete_Controller.js';
import { get_controller } from '../controllers/Get_Controller.js';
import { get_id_controller } from '../controllers/Get_id_Controller.js';
import { Post_controller } from '../controllers/Post_Controller.js';
import { Put_Controller } from '../controllers/Put_Controller.js';

const router = Router();

export const clients = [];

router.get('/clients', get_controller);

router.get('/clients/:id', get_id_controller);

router.post('/clients', Post_controller);

router.put('/clients/:id', Put_Controller);

router.delete('/clients/', delete_controller);

export { router };

