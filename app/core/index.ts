import { MySQLDao } from './dao/mysql/mysql';
import { Service} from './service';
import mysqlConfig from './mysqlConfig.json';

export default new Service(new MySQLDao(mysqlConfig as any));
