import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
});

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AppForm
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      <AppFormField
        icon='face-profile'
        style={styles.inputBox}
        name='name'
        placeholder='Name'
      />
      <AppFormField
        icon='email'
        style={styles.inputBox}
        textContentType='emailAddress'
        keyboardType='email-address'
        name='email'
        placeholder='Email'
      />
      <AppFormField
        onPress={() => setShowPassword(!showPassword)}
        iconRight={showPassword ? 'eye' : 'eye-off'}
        icon='lock'
        style={styles.inputBox}
        name='password'
        secureTextEntry={!showPassword}
        placeholder='Password'
      />
      <SubmitButton title='REGISTER' />
    </AppForm>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    marginBottom: 10,
  },
});
