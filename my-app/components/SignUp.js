import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Realm from 'realm';

const UserSchema = {
  name: 'User',
  properties: {
    email: 'string',
    password: 'string',
  },
};

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const realm = await Realm.open({
      schema: [UserSchema],
    });

    realm.write(() => {
      realm.create('User', {
        email,
        password,
      });
    });

    console.log('User created:', { email, password });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign up" onPress={handleSignup} />
    </View>
  );
};

export default Signup;
