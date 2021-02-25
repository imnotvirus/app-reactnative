import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Button, useTheme, TextInput} from 'react-native-paper';

export default function Home() {
  const [nome, setNome] = useState('');
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      <ImageBackground
      source='../assets/images/onda.jpg'
      style={{
        flex: 1,
        padding: 20,
        resizeMode: "cover",
        justifyContent: "center"
      }}
      >
        <Text
          style={{
            fontSize: 25,
            color: colors.text,
            margin: 10,
          }}>
          {' '}
          {nome}{' '}
        </Text>
        <TextInput
          label="Nome"
          mode="outlined"
          style={{marginTop: 10, borderColor: colors.primary}}
          value={nome}
          onChangeText={(nome) => setNome(nome)}
        />
        <TextInput
          label="Senha"
          mode="outlined"
          style={{marginTop: 10, borderColor: colors.primary}}
          value={nome}
          onChangeText={(nome) => setNome(nome)}
        />
        <Button
          mode="contained"
          theme={{roundness: 50}}
          style={{marginTop: 10}}
          onPress={() => console.log('Login')}>
          Login
        </Button>
      </ImageBackground>
    </View>
  );
}
