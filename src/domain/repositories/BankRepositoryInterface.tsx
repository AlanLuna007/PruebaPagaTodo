import BankObject from '../models/BankObject';

interface BankRepositoryInterface {
  getBankList(): Promise<BankObject[]>;
}

export default BankRepositoryInterface;
