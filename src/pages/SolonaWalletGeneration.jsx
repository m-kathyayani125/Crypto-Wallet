import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import * as bip39 from 'bip39';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF2F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#8B1874',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  balanceText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  mnemonicGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  mnemonicBox: {
    backgroundColor: '#8B1874',
    color: '#ffff',
    fontSize: 18,
    padding: 10,
    margin: 5,
  },
});

const createConnection = () => {
  const connection = new Connection(clusterApiUrl('devnet'));
  return connection;
};

const createAccount = mnemonic => {
  const seed = bip39.mnemonicToSeedSync(mnemonic, ''); // (mnemonic, password)
  const keypair = Keypair.fromSeed(seed.slice(0, 32));
  return keypair;
};

const getBalance = async publicKey => {
  try {
    const connection = createConnection();

    const lamports = await connection.getBalance(publicKey).catch(err => {
      console.error(`Error: ${err}`);
    });

    return lamports / LAMPORTS_PER_SOL;
  } catch (err) {
    console.error(err.message);
  }
};

const requestAirdrop = async publicKey => {
  try {
    const connection = createConnection();

    const airdropSignature = await connection.requestAirdrop(
      publicKey,
      LAMPORTS_PER_SOL,
    );

    const signature = await connection.confirmTransaction(airdropSignature);
  } catch (err) {
    console.error(err);
  }
};

export const SolonaWalletGeneration = ({ navigation, route }) => {
  const [balance, setBalance] = useState(10);
  const keypair = createAccount(route.params.mnemonic);
  requestAirdrop(keypair.publicKey);

  useEffect(() => {
    (async () => {
      try {
        const connection = createConnection();

        const lamports = await connection.getBalance(keypair.publicKey).catch(err => {
          console.error(`Error: ${err}`);
        });

        setBalance(lamports / LAMPORTS_PER_SOL);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, []);

  const mnemonicWords = route.params.mnemonic.split(' ');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Solana Wallet Generation</Text>
      <Text style={styles.balanceText}>Balance: {balance}</Text>
      <ScrollView contentContainerStyle={styles.mnemonicGrid}>
        {mnemonicWords.map((word, index) => (
          <View key={index} style={styles.mnemonicBox}>
            <Text style={{color:'white'}}>{word}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
