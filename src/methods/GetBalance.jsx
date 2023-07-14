const ethers = require('ethers');

export const GetBalance =  address => {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://eth-goerli.public.blastapi.io',
  );
  // try {
  //   const balance = await provider.getBalance(address);
  //   // if (!ethers.utils.isBigNumber(balance)) {
  //   //   throw new Error('Invalid BigNumber value');
  //   // }
  //   const formatBalance = ethers.utils.formatEther(balance);
  //   return formatBalance;
  // } catch (error) {
  //   console.error(error.message);
  //   return 'cannot fetch balance';
  // }
  let etherString;
  provider
    .getBalance(address)
    .then(b => {
       etherString = ethers.utils.formatEther(b);
      console.log(etherString)
      // return etherString;
    })
    .catch(err => {
      Alert.alert(err.message);
    });
    return etherString
};
