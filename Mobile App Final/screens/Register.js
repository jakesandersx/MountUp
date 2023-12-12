import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { registerUser } from '../api/authService';
import { useUser } from '../context/UserContext';

export default function Register({navigation}) {
  const [firstName, onChangeFirst] = useState('');
  const [lastName, onChangeLast] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [verifyPassword, onVerifyPassword] = useState('');
  const [checked, setChecked] = useState('');
  const [id, onChangeId] = useState('');
  const { updateUser } = useUser();
  

  async function onRegister(){
    console.log(await registerUser(firstName, lastName, email, password, verifyPassword, checked, id));
    updateUser({firstName, lastName, email, password, verifyPassword, checked, id));
    navigation.navigate("App")
  }

  return (
    <LinearGradient colors={['#003366', '#003366', '#FFCC00']} style={mainStyles.background}>
      <Text style={mainStyles.first2}>First Name:</Text>
      <Text style={mainStyles.first}>First Name:</Text>
      <TextInput style={mainStyles.firstInput} onChangeText={onChangeFirst} value={firstName} placeholder='  first name'/>
      <Text style={mainStyles.last2}>Last Name:</Text>
      <Text style={mainStyles.last}>Last Name:</Text>
      <TextInput style={mainStyles.lastInput} onChangeText={onChangeLast} value={lastName} placeholder='  last name'/>
      <Text style={mainStyles.email2}>Email:</Text>
      <Text style={mainStyles.email}>Email:</Text>
      <TextInput style={mainStyles.emailInput} onChangeText={onChangeEmail} value={email} placeholder='  email'/>
      <Text style={mainStyles.password2}>Password:</Text>
      <Text style={mainStyles.password}>Password:</Text>
      <TextInput style={mainStyles.passwordInput} onChangeText={onChangePassword} value={password} placeholder='  password'/>
      <Text style={mainStyles.verifyPassword2}>Verify Password:</Text>
      <Text style={mainStyles.verifyPassword}>Verify Password:</Text>
      <TextInput style={mainStyles.verifyPasswordInput} onChangeText={onVerifyPassword} value={verifyPassword} placeholder='  password'/>
      { password !== verifyPassword ? 
        (<View><Text style={mainStyles.match}>Passwords do not match.</Text></View>) : null}
      <Text style={mainStyles.stuGuest2}>Student or Guest?</Text>
      <Text style={mainStyles.stuGuest}>Student or Guest?</Text>
      <View style={mainStyles.container}>
        <RadioButton value="student" status={ checked === 'student' ? 'checked' : 'unchecked' } onPress={() => setChecked('student')} color='white'></RadioButton>
        <Text style={mainStyles.studentText}>Student</Text>
        <RadioButton value="guest" status={ checked === 'guest' ? 'checked' : 'unchecked' } onPress={() => setChecked('guest')} color='white'></RadioButton>
        <Text style={mainStyles.guestText}>Guest</Text>
      </View>
      { checked === 'student' ? 
        (<View><Text style={mainStyles.studentId2}>Student ID:</Text>
        <Text style={mainStyles.studentId}>Student ID:</Text>
        <TextInput style={mainStyles.stuIdInput} onChangeText={onChangeId} value={id} placeholder='  student id'/></View>) : null }
      <TouchableOpacity style={mainStyles.button} onPress={onRegister}>
        <Text style={mainStyles.login2}>Mount Up!</Text>
        <Text style={mainStyles.login}>Mount Up!</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}



const mainStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  },
  first: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    top: "0%",
    right: "9%",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  first2: {
    fontSize: 21,
    color: 'black',
    top: "4.2%",
    right: "9%",
  },
  firstInput: {
    width: 182,
    top: '1%',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  last: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    top: "-1.5%",
    right: "9%",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  last2: {
    fontSize: 21,
    color: 'black',
    top: "2.7%",
    right: "9%",
  },
  lastInput: {
    width: 182,
    top: '-.3%',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  email: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    top: "-3.1%",
    right: "15%",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  email2: {
    fontSize: 23,
    color: 'black',
    top: "1.2%",
    right: "15%",
  },
  emailInput: {
    width: 182,
    top: '-2%',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  password: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    top: "-4.5%",
    right: "10%",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  password2: {
    fontSize: 21,
    color: 'black',
    top: "-.3%",
    right: "10%",
  },
  passwordInput: {
    width: 182,
    top: '-3.5%',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  verifyPassword: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    top: "-5.5%",
    right: "3%",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  verifyPassword2: {
    fontSize: 21,
    color: 'black',
    top: "-1.3%",
    right: "3%",
  },
  verifyPasswordInput: {
    width: 182,
    top: '-4%',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  match: {
    fontSize: 14,
    color: 'red',
    top: "-100%",
    right: "1%",
  },
  stuGuest: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    top: "-5.5%",
    right: "2%",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  stuGuest2: {
    fontSize: 21,
    color: 'black',
    top: "-1.3%",
    right: "2%",
  },
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    top: '-8%'
  },
  studentText: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white',
    right: '10%',
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  guestText: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white',
    right: '5%',
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  studentId: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    top: "-52%",
    right: "-.5%",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },
  studentId2: {
    fontSize: 21,
    color: 'black',
    top: "-20%",
    right: "-0.2%",
  },
  stuIdInput: {
    width: 182,
    top: '-40%',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  button: {
    width: 160,
    height: 45,
    top: '-2%',
    borderWidth: 3,
    backgroundColor: '#003366',
    borderRadius: 10,
  },
  login: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
    top: '-85%'
  },
  login2: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center'
  },
});
