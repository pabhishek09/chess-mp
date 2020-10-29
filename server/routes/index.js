import Router from 'koa-router';
import user from './user';

const router = new Router();

user(router);

export default (app) => {
  app.use(router.routes())
    .use(router.allowedMethods());
}
