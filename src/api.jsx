import axios from 'axios';

const server = 'http://localhost:8080/';

const request = (type, path, body) => axios
  .request({ url: `${server}${path}`, method: type, data: body })
  .then(req => req.data);

export const findBookbyId = body => request('get', body);
export const allbooks  = body => request('get', 'books');
export const findBookByName = body => request('get', 'name/'+ body);
export const findBookByAuthorName = body => request('get', 'author/'+ body);
export const login = body => request('post', 'app/login', body);
export const register = body => request('post', 'app/register', body);
export const upvote = body => request('get', '/upvote/' + body.id);
export const downvote = body => request('get', '/downvote/' + body.id);
 
