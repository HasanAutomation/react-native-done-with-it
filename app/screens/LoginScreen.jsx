import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { Image, StyleSheet, Text } from 'react-native';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label('Email'),
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
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
              icon='email'
              placeholder='Email'
              onChangeText={handleChange('email')}
              style={styles.textInput}
            />
            <Text>{errors['email']}</Text>
            <AppTextInput
              icon='lock'
              iconRight={showPassword ? 'eye' : 'eye-off'}
              style={styles.textInput}
              placeholder='Password'
              onChangeText={handleChange('password')}
              onPress={() => setShowPassword(!showPassword)}
              secureTextEntry={showPassword}
            />
            <Text>{errors['password']}</Text>
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
