import {Alert} from 'react-native'
const ethers = require('ethers');


export const SendTransaction = async (toAddress, privateKey, amount) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://eth-goerli.public.blastapi.io',
    );
    const tx = {
      to: toAddress,
      value: ethers.utils.parseEther(amount),
    };
    console.log(tx);
    console.log('send transaction function');
    const wallet = new ethers.Wallet(privateKey, provider);
    const transaction = await wallet.sendTransaction(tx);
    console.log('waiting for receipt');
    const receipt = await transaction.wait();
    const txHash = receipt.transactionHash;
    console.log('txHash', txHash);
    Alert.alert('Transaction Hash',txHash)
  } catch (error) {
    console.error(error.message);
  }
};
