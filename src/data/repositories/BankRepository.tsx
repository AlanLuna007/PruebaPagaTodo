import BankRepositoryInterface from '../../domain/repositories/BankRepositoryInterface';
import BankObject from '../../domain/models/BankObject';
import DatabaseDataSource from '../dataSource/DatabaseDataSource';
import ApiDataSource from '../dataSource/ApiDataSource';

class BankRepository implements BankRepositoryInterface {
  private apiDataSource: ApiDataSource;
  private databaseDataSource: DatabaseDataSource;

  constructor() {    
    this.apiDataSource = new ApiDataSource();
    this.databaseDataSource = new DatabaseDataSource();
  }

  async getBankList(): Promise<BankObject[]> {
      try {        
          const bankList = await this.databaseDataSource.getBankList();

      if (bankList.length > 0) {
        return bankList;
    }
    
      console.log('Retrieving bank list from API');
      const fetchedBankList = await this.apiDataSource.getBankList();
      await this.databaseDataSource.saveBankList(fetchedBankList);
      return fetchedBankList;
    } catch (error) {
      throw new Error('Failed to retrieve bank list');
    }
  }
}

export default BankRepository;
