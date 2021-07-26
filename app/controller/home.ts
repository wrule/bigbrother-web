import { Controller } from 'egg';
import Core from '../core';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.output(await ctx.service.test.sayHi('api'));
  }

  public async getAllProjectInfo() {
    const { ctx } = this;
    ctx.output(await Core.GetAllProjectInfo());
  }

  public async getProjectApiList() {
    const { ctx } = this;
    const projectName = ctx.query.projectName || '';
    ctx.output(await Core.GetProjectApiList(projectName));
  }

  public async getApiHistory() {
    const { ctx } = this;
    const hash = ctx.query.hash || '';
    ctx.output(await Core.GetApiHistory(hash));
  }

  public async getApiHistoryDetail() {
    const { ctx } = this;
    const id = Number(ctx.query.id || '');
    ctx.output(await Core.GetApiHistoryDetail(id));
  }

  public async getLatestApi() {
    const { ctx } = this;
    const hash = ctx.query.hash || '';
    ctx.output(await Core.GetLatestApi(hash));
  }
}
