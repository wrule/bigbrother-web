export interface IApi {
  hash: string;
  prjName: string,
  prjVersion: string,
  watcherName: string,
  watcherType: string,
  httpMethod: string,
  httpPath: string,
  httpRspData: any,
  httpRspModel: any,
  reportTime: Date,
}
