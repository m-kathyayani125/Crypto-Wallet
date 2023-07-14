import React from 'react';
import {Text} from 'react-native';
import {HomeScreen, ProfileScreen} from './src/pages/Homescreen';
import {WalletCreateLanding} from './src/pages/WalletCreateLanding';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreatePassword} from './src/pages/CreatePassword';
import {SecureWallet} from './src/pages/SecureWallet';
import {LandingPage} from './src/pages/LandingPage';
import { EthereumPage } from './src/pages/Ethereum';
import {Login} from './src/pages/Login';
import {SolonaWalletGeneration} from './src/pages/SolonaWalletGeneration';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="WalletCreateLanding"
          component={WalletCreateLanding}
        />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="SecureWallet" component={SecureWallet} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="SolonaWalletGeneration"
          component={SolonaWalletGeneration}
        />
        <Stack.Screen name="Ethereum" component={EthereumPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;