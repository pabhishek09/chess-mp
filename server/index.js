import koa from 'koa';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import serve from 'koa-static';
import dotenv from 'dotenv';
import routes from './routes';

export default () => {
  const app = new koa();

  dotenv.config();
  
  app.use(helmet());
  app.use(logger());
  
  routes(app);
  
  app.use(serve('dist'));
  
  app.listen(process.env.PORT || 8000);
};
