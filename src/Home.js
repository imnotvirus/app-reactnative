import React, {useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {Button, useTheme, TextInput, Card} from 'react-native-paper';

export default function Home() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ImageBackground
        source={require('../assets/images/onda.jpg')}
        style={{
          flex: 1,
          padding: 20,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            color: colors.text,
            margin: 10,
          }}>
          {' '}
          {usuario}{' '}
        </Text>
        <Card
          theme={{roundness: 10}}
          style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
          <Card.Content
            theme={{roundness: 10}}
            style={{
              backgroundColor: 'rgba(255,255,255,0.5)',
            }}>
            <Image style={{}} source={require('../assets/images/logo.png')} />
            <Text>Vest Surf</Text>
            <TextInput
              label="USUARIO"
              mode="outlined"
              style={{
                backgroundColor: colors.white,
                color: '#DDD',
              }}
              value={usuario}
              onChangeText={(usuario) => setUsuario(usuario)}
            />
            <TextInput
              label="SENHA"
              mode="outlined"
              style={{backgroundColor: colors.white}}
              value={senha}
              onChangeText={(senha) => setSenha(senha)}
            />
            <Button
              mode="contained"
              theme={{roundness: 50}}
              style={{marginTop: 10}}
              onPress={() => console.log('Login')}>
              Login
            </Button>
          </Card.Content>
        </Card>
      </ImageBackground>
    </View>
  );
}
