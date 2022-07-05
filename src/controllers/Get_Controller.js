import { clients } from '../routes/routes.js';

export function get_controller(request,response) {
    
  const { name } = request.query;
  
  const results = name
  ? clients.filter(client => client.name.includes(name))
  : clients;
  
  response.status(200).json(results);
}

//router.get('/clients', (request, response) => {
//});  

