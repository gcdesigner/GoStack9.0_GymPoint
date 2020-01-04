import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import PackController from './app/controllers/PackController';
import EnrollController from './app/controllers/EnrollController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.get('/student/:id/checkins', CheckinController.show);
routes.post('/student/:id/checkins', CheckinController.store);
routes.get('/student/:id/help-orders', HelpOrderController.show);
routes.get(
  '/student/:id/help-orders/:idAnswer/answers',
  HelpOrderController.detail
);
routes.post('/student/:id/help-orders', HelpOrderController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

routes.get('/students', StudentController.index);
routes.get('/students/:id', StudentController.find);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.delete);

routes.get('/packs', PackController.index);
routes.get('/packs/:id', PackController.find);
routes.post('/packs', PackController.store);
routes.put('/packs/:id', PackController.update);
routes.delete('/packs/:id', PackController.delete);

routes.get('/enrolls', EnrollController.index);
routes.get('/enrolls/:id', EnrollController.find);
routes.post('/enrolls', EnrollController.store);
routes.put('/enrolls/:id', EnrollController.update);
routes.delete('/enrolls/:id', EnrollController.delete);

routes.get('/help-orders', HelpOrderController.index);
routes.put('/help-orders/:id/answer', HelpOrderController.update);
routes.delete('/help-orders/:id', HelpOrderController.delete);

export default routes;
