import BankRepositoryInterface from '../repositories/BankRepositoryInterface';
import BankObject from '../models/BankObject';
import BankRepository from '../../data/repositories/BankRepository';

class GetBankListUseCase {
  private bankRepository: BankRepositoryInterface;

  constructor() {
    this.bankRepository = new BankRepository();
  }

  execute(): Promise<BankObject[]> {
    return this.bankRepository.getBankList();
  }
}

export default GetBankListUseCase;
