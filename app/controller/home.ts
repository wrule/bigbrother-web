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
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async getApiHistory() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async getApiHistoryDetail() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
