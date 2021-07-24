import { Controller } from 'egg';
import Core from '../core';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('api');
  }

  public async getAllProjectInfo() {
    const { ctx } = this;
    ctx.body = await Core.GetAllProjectInfo();
  }

  public async getProjectApiList() {
    const { ctx } = this;
    const projectName = ctx.query.projectName || '';
    ctx.body = await Core.GetProjectApiList(projectName);
  }

  public async getApiHistory() {
    const { ctx } = this;
    const hash = ctx.query.hash || '';
    ctx.body = await Core.GetApiHistory(hash);
  }

  public async getApiHistoryDetail() {
    const { ctx } = this;
    const id = Number(ctx.query.id || '');
    ctx.body = await Core.GetApiHistoryDetail(id);
  }
}
