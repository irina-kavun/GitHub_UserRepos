import {get} from './backend';

export class UserService {
  getUserRepos(userName) {
    return get(`/users/${userName}/repos`)
  }
}