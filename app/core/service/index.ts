import { IApi } from '../model/api';
import { IDao } from '../dao/dao';

export class Service {
  constructor(private dao: IDao) { }

  public async GetLatestApi(hash: string): Promise<IApi | null> {
    const result: any = await this.dao.GetLatestApiHistory(hash);
    if (result) {
      result.httpRspData = JSON.parse(result.httpRspData);
      result.httpRspModel = JSON.parse(result.httpRspModel);
      return result as IApi;
    }
    return null;
  }

  public async InsertApiHistory(api: IApi) {
    const insertData: any = { ...api };
    insertData.httpRspData = JSON.stringify(insertData.httpRspData);
    insertData.httpRspModel = JSON.stringify(insertData.httpRspModel);
    const result = await this.dao.InsertApiHistory(insertData);
    return result;
  }

  public async GetAllProjectInfo() {
    const result = await this.dao.GetAllProjectInfo();
    return result;
  }
 
  public async GetProjectApiList(projectName: string) {
    const result = await this.dao.GetProjectApiList(projectName);
    return result;
  }

  public async GetApiHistory(apiHash: string) {
    const result = await this.dao.GetApiHistory(apiHash);
    return result;
  }

  public async GetApiHistoryDetail(id: number) {
    const result = await this.dao.GetApiHistoryDetail(id);
    return result;
  }
}
