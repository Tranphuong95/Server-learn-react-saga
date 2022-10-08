import express from 'express';
import {addUser, deleteUser, getUser, getUsers, upadateUser} from '../controllers/users.js';

const routerUsers = express.Router();
routerUsers.get('/users', getUsers);
routerUsers.get('/users/:id', getUser);
routerUsers.post('/users', addUser);
routerUsers.put('/users/:id', upadateUser);
routerUsers.delete('/users/:id', deleteUser);
export default routerUsers;