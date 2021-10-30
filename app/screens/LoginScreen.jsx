import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppButton from '../components/AppButton';
import { Image, StyleSheet } from 'react-native';
import AppFormField from '../components/AppFormField';

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

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
      >
        {({ handleSubmit }) => (
          <>
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
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
