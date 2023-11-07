import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Background from '../components/common/Background';
import Btn from '../components/common/Btn';
import { darkGreen } from '../constants/Constants';
import Field from '../components/common/Field';
import auth from '@react-native-firebase/auth';
interface LoginProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);


auth()
  .createUserWithEmailAndPassword(email, password)
  .then((res) => {
    if(res.user.uid) {
        navigation.navigate('Home')
    };
    console.log('User account created & signed in!', res);
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }

    console.error(error);
  });
    // You can add your login logic here
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.subText}>Login to your account</Text>
          <Field
            placeholder="Email / Username"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => alert('Forgot Password?')}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </TouchableOpacity>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={handleLogin} // Call handleLogin when the "Login" button is pressed
          />
          <View style={styles.signupTextContainer}>
            <Text style={styles.signupText}>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => alert('Signup')}>
              <Text style={styles.signupLink}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: 460,
    },
    title: {
      color: 'white',
      fontSize: 64,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    formContainer: {
      backgroundColor: 'white',
      height: 700,
      width: 400,
      borderTopLeftRadius: 130,
      paddingTop: 100,
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 40,
      color: darkGreen,
      fontWeight: 'bold',
    },
    subText: {
      color: 'grey',
      fontSize: 19,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    forgotPassword: {
      alignItems: 'flex-end',
      width: '78%',
      paddingRight: 16,
      marginBottom: 200,
    },
    forgotPasswordText: {
      color: darkGreen,
      fontWeight: 'bold',
      fontSize: 16,
    },
    signupTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    signupText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    signupLink: {
      color: darkGreen,
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  
