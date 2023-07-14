import { Text, View, TextInput, Button } from 'react-native';
import React from 'react';
import data from './data.json';
import RNFS from 'react-native-fs';

export const Login = ({ navigation }) => {
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={{ backgroundColor: '#FEF2F4', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold',color: '#8B1874' }}>Enter Password</Text>
      <Text style={{ color: 'black' }}>
        This Password will unlock your Metamask wallet only on this device.
      </Text>
      
      <TextInput
        onChangeText={onChangePassword}
        value={password}
        style={{ backgroundColor: 'white', color: 'black', paddingHorizontal: 10, paddingVertical: 5, width: '80%', marginBottom: 10 }}
      />
      <Text style={{ color: 'black' }}>Must be at least 8 characters</Text>
      <Text
        style={{ fontSize: 15, color: 'black', textAlign: 'center', marginHorizontal: 10, marginBottom: 8}}>
        
      </Text>
      <Button
        title="Login"
        color="#F15A29"
        onPress={() => {
          const walletCopy = [
            data.password[0].mnemonic,
            data.password[0].privateKey,
            data.password[0].publicAddress,
          ];
          navigation.navigate('LandingPage', { walletCopy: walletCopy });
        }}
      />
    </View>
  );
};
