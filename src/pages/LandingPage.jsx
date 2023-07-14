import {
  Text,
  View,
  Button,
  Alert,
  TextInput,
  FlatList,
  Item,
} from 'react-native';
import {useState, useEffect} from 'react';
import {JsonRpcProvider} from '@ethersproject/providers';
import {utils, Wallet, parseEther, Signer} from 'ethers';
import {SendTransaction} from '../methods/SendTransaction';
import {GetBalance} from '../methods/GetBalance';
import data from './data.json';
import {CreateNewWallet} from '../methods/CreateNewWallet';
const ethers = require('ethers');
const fs = require('fs');

export const LandingPage = ({navigation, route}) => {
  const [balance, setBalance] = useState('0');
  const [send, setSend] = useState(false);
  const [amount, onChangeAmount] = useState('0');
  const [sendAddress, onChangeSendAddress] = useState('');
  const [showAddress, setShowAddress] = useState('');
  const [newWallet, setNewWallet] = useState('new Wallet');
  const [index, setIndex] = useState(1);
  const [showEthereum, setShowEthereum] = useState(false);
  const [showSolona, setShowSolona] = useState(false);
  const [multiWallet, setMultiWallet] = useState(false);
  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://eth-goerli.public.blastapi.io',
    );

    provider
      .getBalance(route.params.walletCopy[2])
      .then(b => {
        let etherString = ethers.utils.formatEther(b);
        setBalance(etherString);
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  });

  return (
    <View
      style={{
        backgroundColor: '#FEF2F4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: '#8B1874', fontSize: 30, textAlign: 'center', margin: 20 }}>Select Network</Text>
      <Button
      color="#F15A29"
        title="Ethereum"
        onPress={() => navigation.navigate('Ethereum',{ walletCopy: route.params.walletCopy })}></Button>
        <Text
        style={{ fontSize: 15, color: 'black', textAlign: 'center', marginHorizontal: 10, marginBottom: 8}}>
        
      </Text>
      {/* <Text style={{ color: '#8B1874', fontSize: 30, textAlign: 'center', margin: 20 }}>
        Balance: {balance}ETH
      </Text>
      {!send && (
        <Button
          title="Send"
          color="#F15A29"
          onPress={() => {
            setSend(true);
          }}
        />
      )}
      {send && (
        <View>
          <Text style={{ color: 'black' }}>
            Enter the Receiver's public Address
          </Text>
          <TextInput
            onChangeText={onChangeSendAddress}
            value={sendAddress}
            style={{ backgroundColor: 'white', color: 'black', paddingHorizontal: 10, paddingVertical: 5, width: '80%', marginBottom: 10 }}
          />
          <Text style={{ color: 'black' }}>Enter the Amount</Text>
          <TextInput
            onChangeText={onChangeAmount}
            value={amount}
            style={{ backgroundColor: 'white', color: 'black', paddingHorizontal: 10, paddingVertical: 5, width: '80%', marginBottom: 10 }}
          />
          <Button
            title="Initiate Transaction"
            color="#F15A29"
            onPress={() => {
              SendTransaction(sendAddress, route.params.walletCopy[1], amount);
              // setSend(false);
            }}
          />
        </View>
      )}
      <Text
        style={{ fontSize: 15, color: 'black', textAlign: 'center', marginHorizontal: 10, marginBottom: 8}}>
        
      </Text>
      <Button color="#F15A29" title="Recieve" onPress={() => setShowAddress(p => !p)} />
      {showAddress && (
        <View>
          <Text style={{ color: '#8B1874', fontSize: 16 }}>
            Your Public Addresses are:
          </Text>
          <Text style={{ color: 'black', fontSize: 18 }}>
            {route.params.walletCopy[2]}
          </Text>
        </View>
      )}
      <Text style={{ margin: 20 }} />
      <Button
        title="Create New Account"
        onPress={() => {
          const wallet = CreateNewWallet(route.params.walletCopy[0], index);
          setNewWallet(wallet.address);
          setIndex(i => (i = i + 1));
        }}
        color="#F15A29"
      />
      <Text style={{ color: '#8B1874' }}>{newWallet}</Text> */}
      <Button
        title="Create Solona"
        onPress={() =>
          navigation.navigate('SolonaWalletGeneration', {
            mnemonic: route.params.walletCopy[0],
          })
        }
        color="#F15A29"
      />
    </View>
  );
};
