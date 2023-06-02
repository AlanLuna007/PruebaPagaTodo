// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BankObject from '../../domain/models/BankObject';

class DatabaseDataSource {
  constructor() {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    try {
      console.log('Connected to database');
      await this.createBankTableIfNotExists();
    } catch (error) {
      console.error('Error connecting to database:', error);
    }
  }

  async createBankTableIfNotExists() {    
    try {
      // console.log('Bank table created');
    } catch (error) {
      console.log('createBankTableIfNotExistserror', error);
      throw new Error('Failed to create bank table');
    }
  }

  async saveBankList(bankList: BankObject[]): Promise<void> {
    try {
      await AsyncStorage.setItem('banks', JSON.stringify(bankList));
      console.log('Bank list saved');
    } catch (error) {
      throw error;
    }
  }

  async getBankList(): Promise<BankObject[]> {
    
    try {
      const savedBankList = await AsyncStorage.getItem('banks');
      
      if (savedBankList) {
        const bankList: BankObject[] = JSON.parse(savedBankList);
        console.log('Bank list retrieved');
        return bankList;
      } else {
        return [];
      }
    } catch (error) {
      throw error;
    }
  }
}

export default DatabaseDataSource;
