import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/api/api/getAllProjectInfo', controller.home.getAllProjectInfo);
  router.get('/api/api/getProjectApiList', controller.home.getProjectApiList);
  router.get('/api/api/getApiHistory', controller.home.getApiHistory);
  router.get('/api/api/getApiHistoryDetail', controller.home.getApiHistoryDetail);
  router.get('/api/api/getLatestApi', controller.home.getLatestApi);
};
