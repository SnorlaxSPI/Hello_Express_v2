import { clients } from '../routes/routes.js'

export function get_id_controller(request,response) {

  //const clients = [];

  const { id } = request.params;

  const client = clients.find(value => value.id == id);

  if(client == undefined) {
    response.status(400).json({ error: "Requisição inválida" });
  } else {
    response.status(200).json(client);
  }
};