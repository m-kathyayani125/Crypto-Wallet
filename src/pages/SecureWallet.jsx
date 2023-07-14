// import {MnemonicGeneration} from './Mnemonics';
// import {Text, Alert, View, Button} from 'react-native';
// import 'react-native-get-random-values';
// import * as bip39 from 'bip39';
// import '../../shim';
// import '@ethersproject/shims';
// import {Wallet} from 'ethers';
// const ethers = require('ethers');

// function generateMnemonic() {
//   const Mnemonic = bip39.generateMnemonic();
//   return Mnemonic;
// }

// const walletCopy = GenerateWallet();

// export const SecureWallet = ({navigation}) => {
//   return (
//     <View>
//       <Text
//         style={{
//           fontSize: 30,
//           textAlign: 'center',
//           color: 'black',
//           fontWeight: 'bold',
//         }}>
//         Secure Wallet landing page
//       </Text>
//       <Text style={{color: 'black'}}>{walletCopy}</Text>
//       <Button
//         title="Home"
//         onPress={() => {
//           navigation.navigate('LandingPage', {walletCopy: walletCopy});
//         }}
//       />
//     </View>
//   );
// };

import React from 'react';
import { Text, View, Button, StyleSheet,ScrollView } from 'react-native';
import 'react-native-get-random-values';
import * as bip39 from 'bip39';
import '../../shim';
import '@ethersproject/shims';
import { ethers } from 'ethers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF2F4',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    color: '#8B1874',
    fontWeight: 'bold',
  },
  walletInfo: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#F15A29',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  mnemonicGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  mnemonicBox: {
    backgroundColor: '#B71375',
    color: '#ffff',
    fontSize: 18,
    padding: 10,
    margin: 5,
  },
});

function generateMnemonic() {
  const mnemonic = bip39.generateMnemonic();
  return mnemonic;
}

const GenerateWallet = () => {
  const HDWallet = ethers.Wallet.createRandom();
  //   const mnemonic = HDWallet._mnemonic().phrase;
  //   const privatekey = HDWallet.privateKey;
  //   const address = HDWallet.address;
  const mnemonic =
    'arrange crazy inner degree toilet behave humble vote hip diary vessel essence';
  const privatekey =
    '0x38c784626af6bcb712f782193482eafbe8769fd2abc988ab2e1c81f178e8f4e4';
  const publickey =
    '0x0499eedccfbbbc01602e79a4d6e39a7d6ec5194d6c1f8a22abcfdf57a2236c083afbe77eaecaaeaaaeb2758823ee07377dc930184078db8ed5356ba';
  const address = '0xE6ccbFbe35bDea203F00F91Cb386579E11F73af8';

  const walletCopy = [mnemonic, privatekey, address];
  return walletCopy;
};

const walletCopy = GenerateWallet();

export const SecureWallet = ({ navigation }) => {
  const mnemonicWords = walletCopy[0].split(' ');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Secure your credentials</Text>
      <ScrollView contentContainerStyle={styles.mnemonicGrid}>
        {mnemonicWords.map((word, index) => (
          <View key={index} style={styles.mnemonicBox}>
            <Text style={{color:'white'}}>{word}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.walletInfo}>Private Key: {walletCopy[1]}</Text>
      <Text style={styles.walletInfo}>Address: {walletCopy[2]}</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('LandingPage', { walletCopy: walletCopy });
        }}
        style={styles.button}
        color="#F15A29"
      />
    </View>
  );
};

