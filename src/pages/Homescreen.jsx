// import React from 'react';
// import { Button, Text, View, Image } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ backgroundColor: '#FEF2F4', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#B71375', marginBottom: 20 }}>
//         METAMASK
//       </Text>
//       <Text style={{ fontSize: 20, color: '#B71375', marginBottom: 20 }}>
//         Welcome to MetaMask
//       </Text>
//       <Text style={{ fontSize: 15, color: '#8B1874', textAlign: 'center', marginHorizontal: 20, marginBottom: 20 }}>
//         Trusted with million. MetaMask is a secure wallet making the world of web3 accessible to all.
//       </Text>
//       <Image
//         style={{ width: 200, height: 200, marginBottom: 20 }}
//         source={require('../meta-mask.png')}
//       />
//       <Button
//         title="Get Started"
//         color="#F15A29"
//         onPress={() => navigation.navigate('WalletCreateLanding')}
//       />
//     </View>
//   );
// };

// const ProfileScreen = ({ navigation, route }) => {
//   return <Text style={{ color: '#333333' }}>This is {route.params.name}'s profile</Text>;
// };

// export { HomeScreen, ProfileScreen };
import {Button, Text, View, Image} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: '#FEF2F4', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{ fontSize: 30, fontWeight: 'bold', color: '#B71375', marginBottom: 20 }}>
        METAMASK
      </Text>
      <Text
        style={{ fontSize: 20, color: '#B71375', marginBottom: 20 }}>
        Welcome to MetaMask
      </Text>
      <Text
        style={{ fontSize: 15, color: '#8B1874', textAlign: 'center', marginHorizontal: 20, marginBottom: 20 }}>
        Trusted with millions.MetaMask is a secure wallet making the world of
        web3 accesible to all
      </Text>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('../meta-mask.png')}
      />
      <Button
        title="Get Started"
        color="#F15A29"
        onPress={() => {navigation.navigate('WalletCreateLanding'); console.log("hello");}}
      />
    </View>
  );
};
export const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};