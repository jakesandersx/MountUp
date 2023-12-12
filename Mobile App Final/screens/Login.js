import { StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { loginUser } from '../api/authService';

export default function Login({navigation}) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  async function onLogin(){
    const user = await loginUser(email, password);
    if (user){
      navigation.navigate("App");
    }
  }

  return (
    <LinearGradient colors={['#003366', '#003366', '#FFCC00']} style={mainStyles.background}>
      <Image source={require('../images/logo.png')} style={mainStyles.logo}/>
      <Text style={mainStyles.emailText2}>Email:</Text>
      <Text style={mainStyles.emailText}>Email:</Text>
      <TextInput style={mainStyles.emailInput} onChangeText={onChangeEmail} value={email} placeholder='  email'/>
      <Text style={mainStyles.passwordText2}>Password:</Text>
      <Text style={mainStyles.passwordText}>Password:</Text>
      <TextInput style={mainStyles.passwordInput} onChangeText={onChangePassword} value={password} placeholder='  password'/>
      <TouchableOpacity style={mainStyles.button} onPress={onLogin}>
        <Text style={mainStyles.login2}>Login</Text>
        <Text style={mainStyles.login}>Login</Text>
      </TouchableOpacity>
      <Text style={mainStyles.register} onPress={()=> navigation.navigate("Register")}>Register</Text>
    </LinearGradient>
  );
}



const mainStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  },
  logo: {
    width: "55%",
    height: "35%",
    alignItems: "center",
    top: '18%'
  },
  emailText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    top: "16.3%",
    right: "16%",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  emailText2: {
    fontSize: 22.5,
    color: 'black',
    top: "20%",
    right: "16%",
  },
  passwordText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    top: "15%",
    right: "11%",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  passwordText2: {
    fontSize: 21,
    color: 'black',
    top: "18.6%",
    right: "11%",
  },
  emailInput: {
    width: 182,
    top: '17.5%',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  passwordInput: {
    width: 182,
    top: '16%',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  register: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'white',
    top: "23%",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  button: {
    width: 160,
    height: 45,
    top: '19%',
    borderWidth: 3,
    backgroundColor: '#003366',
    borderRadius: 10,
  },
  login: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
    top: '-89%'
  },
  login2: {
    fontSize: 27,
    color: 'black',
    textAlign: 'center'
  },
});
