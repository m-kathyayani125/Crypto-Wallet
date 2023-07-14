import { Text, View, TextInput, Button, Alert } from 'react-native';
import React from 'react';

export let password = '';
export const CreatePassword = ({ navigation }) => {
  const [newPassword, onChangeNewPassword] = React.useState('');
  const [confirmPassword, onChangeConfirmPassword] = React.useState('');

  return (
    <View style={{ backgroundColor: '#FEF2F4', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#8B1874', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Create Password</Text>
      <Text style={{ color: 'black', marginBottom: 10 }}>
        This Password will unlock your Metamask wallet only on this device.
      </Text>
      <Text style={{ color: '#8B1874', marginBottom: 5 }}>New Password</Text>
      <TextInput
        onChangeText={onChangeNewPassword}
        value={newPassword}
        secureTextEntry
        style={{ backgroundColor: 'white', color: 'black', paddingHorizontal: 10, paddingVertical: 5, width: '80%', marginBottom: 10 }}
      />
      <Text style={{ color: '#8B1874', marginBottom: 5 }}>Confirm Password</Text>
      <TextInput
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
        secureTextEntry
        style={{ backgroundColor: 'white', color: 'black', paddingHorizontal: 10, paddingVertical: 5, width: '80%', marginBottom: 10 }}
      />
      <Text style={{ color: 'black', marginBottom: 10 }}>Must be at least 8 characters</Text>
      <Button
        title="Create Password"
        color="#F15A29"
        onPress={() => {
          if (newPassword === confirmPassword && newPassword.length >= 8) {
            password = newPassword;
            navigation.navigate('SecureWallet');
          } else {
            Alert.alert(
              'Error',
              'New password and Confirm password must be the same, and password must be at least 8 characters long.',
            );
          }
        }}
      />
    </View>
  );
};
