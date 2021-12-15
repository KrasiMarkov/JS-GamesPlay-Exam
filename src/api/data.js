import * as api from './api.js';
import { getUserData } from '../util.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;
// up to here not project specific

// project specific funcs:

//getAll
export async function getAll() {
    return api.get('/data/games?sortBy=_createdOn%20desc');
}

export async function getRecentThree() {
    return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

//create(item)
export async function create(item) {
    return api.post('/data/games', item);
}

//getById(id)
export async function getById(id) {
    return api.get('/data/games/' + id);
}
//deleteById(id)
export async function deleteById(id) {
    return api.del('/data/games/' + id);
}

//edit(id, item)
export async function edit(id, item) {
    return api.put('/data/games/' + id, item);
}

// export async function getMyMemes(userId){
    
//     return  await api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    
// }

// //getByYear(query) - project specific
// export async function getByName(query) {
//     return api.get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
// };
