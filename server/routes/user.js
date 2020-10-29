import { getUsers } from '../handlers/user';

export default (router) => {
  router.get('/user', getUsers)
};
