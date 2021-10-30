import React, { useState } from 'react';
import * as Yup from 'yup';
import { Image, StyleSheet } from 'react-native';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <>
      <Image
        source={require('../assets/images/logo-red.png')}
        resizeMode='cover'
        style={styles.logo}
      />

      <AppForm
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
      >
        <AppFormField
          name='email'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          icon='email'
          placeholder='Email'
          style={styles.textInput}
        />
        <AppFormField
          name='password'
          icon='lock'
          iconRight={showPassword ? 'eye' : 'eye-off'}
          style={styles.textInput}
          placeholder='Password'
          onPress={() => setShowPassword(!showPassword)}
          secureTextEntry={showPassword}
        />
        <SubmitButton title='LOGIN' />
      </AppForm>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  textInput: {
    marginBottom: 10,
  },
});
