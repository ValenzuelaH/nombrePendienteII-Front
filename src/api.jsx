import axios from 'axios';

const server = 'http://localhost:8080';

const request = (type, path, body) => axios
  .request({ url: `${server}${path}`, method: type, data: body })
  .then(req => req.data);

export const findBookbyId = body => request('get', '/'+ body.id);
export const books  = body => request('get', '/books');
export const newBook = body => request('post', '/new', body);
export const findBookByName =body => request('get', '/name/'+ body.name);
 
