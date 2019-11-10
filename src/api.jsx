import axios from 'axios';

const server = 'http://localhost:8080/';

const request = (type, path, body) => axios
  .request({ url: `${server}${path}`, method: type, data: body })
  .then(req => req.data);

export const findBookbyId = body => request('get', 'books/'+ body);
export const books  = body => request('get', 'books/books');
export const newBook = body => request('post', 'books/new', body);
export const findBookByName = body => request('get', '/name/'+ body);
export const findBookByAuthorName = body => request('get', 'author/'+ body);
 
