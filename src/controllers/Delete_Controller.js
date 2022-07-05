import { clients } from '../routes/routes.js';

export function delete_controller(request,response) {
  
  const { id } = request.body;
  console.log(request.body);

  for(let client of clients) {
    const index = clients.indexOf(client.id);
    clients.splice(index, 1)
  }

  response.status(204).send();

  //const index = clients.find(value => value.id == id);

  //if (index == -1) {
  //  response.status(400).send();
  //} else {
  //  //clients.splice(index, 1);
  //  response.status(204).send();
  //}
}