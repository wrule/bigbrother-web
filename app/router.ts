import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/getAllProjectInfo', controller.home.getAllProjectInfo);
  router.get('/getProjectApiList', controller.home.getProjectApiList);
  router.get('/getApiHistory', controller.home.getApiHistory);
  router.get('/getApiHistoryDetail', controller.home.getApiHistoryDetail);
};
