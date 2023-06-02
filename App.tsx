import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BankListScreen from './src/presentation/screens/BankListScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <BankListScreen />
    </SafeAreaProvider>
  )
}


export default App;
