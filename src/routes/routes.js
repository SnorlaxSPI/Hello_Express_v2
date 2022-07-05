import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { get_delete } from '../controllers/delete_controller.js';
import { get_controller } from '../controllers/Get_Controller.js';
import { get_id_controller } from '../controllers/Get_id_Controller.js';
import { Post_controller } from '../controllers/Post_Controller.js';

const router = Router();

export const clients = [];

router.get('/clients', get_controller);

router.get('/clients/:id', get_id_controller);

router.post('/clients', Post_controller);

/**
 * Atualizar nome de clientes
 */

router.put('/clients/:id', (request, response) => {
  const id = request.params.id;
  const nome = request.body.name;

  let client = clients.find(value => value.id == id);
  
  if(client == undefined) {
    response.status(400).send();
  } else {
    client.name = nome;

    response.status(200).json(client);
  }
});

/**
 * DELETE
 */

router.delete('/clients/', get_delete);

export { router };

