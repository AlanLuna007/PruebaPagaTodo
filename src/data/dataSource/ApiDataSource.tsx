import axios from 'axios';
import BankObject from '../../domain/models/BankObject';

class ApiDataSource {
  async getBankList(): Promise<BankObject[]> {
    const response = await axios.get<BankObject[]>('https://dev.obtenmas.com/catom/api/challenge/banks');
    
    return response.data;
  }
}

export default ApiDataSource;
