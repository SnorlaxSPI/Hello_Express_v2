import { clients } from '../routes/routes.js';

export async function Put_Controller(request,response) {
  const id = request.params.id;
  const nome = request.body.name;

  let client = await clients.find(value => value.id == id);
  
  if(client == undefined) {
    response.status(400).send();
  } else {
    client.name = nome;

    response.status(200).json(client);
  }
}