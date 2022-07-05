import { v4 as uuidv4 } from 'uuid';
import { clients } from '../routes/routes.js'

export function Post_controller(request,response) {
      
  //const { name, phone } = request.body;

  const requestClients = request.body;

  for(let requestclient of requestClients) {
    const client = {
      id: uuidv4(),
      name: requestclient.name,
      phone: requestclient.phone,
    }
    clients.push(client);
  }
  response.status(201).json(clients);

  //const id = uuid();

}