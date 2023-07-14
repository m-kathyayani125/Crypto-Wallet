import {Text, View, Button,Image} from 'react-native';

export const WalletCreateLanding = ({navigation}) => {
  return (
    <View style={{ backgroundColor: '#FEF2F4', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image
        style={{ width: 100, height: 100, marginBottom: 20 }}
        source={require('../meta-mask.png')}
      />
     <Text
        style={{ fontSize: 30, fontWeight: 'bold', color: '#B71375', marginBottom: 20 }}>
        METAMASK
      </Text>
      <Text
        style={{ fontSize: 20, color: '#8B1874', marginBottom: 20 }}>
        Wallet Setup
      </Text>
      <Text
        style={{ fontSize: 15, color: 'black', textAlign: 'center', marginHorizontal: 20, marginBottom: 20 }}>
        import existing wallet or create new one
      </Text>
      <Button
        
        title="LOGIN"
        color="#F15A29"
        onPress={() => navigation.navigate('Login')}
      />
      <Text
        style={{ fontSize: 15, color: 'black', textAlign: 'center', marginHorizontal: 10, marginBottom: 8}}>
        
      </Text>
      <Button
      style={{marginHorizontal: 20, marginBottom: 20}}
        title="Create a new wallet"
        color="#F15A29"
        onPress={() => navigation.navigate('CreatePassword')}
      />
    </View>
  );
};
