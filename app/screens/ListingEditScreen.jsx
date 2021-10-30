import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().moreThan(1).lessThan(10000).label('Price'),
  category: Yup.object().nullable().required().label('Category'),
});

const items = [
  { label: 'Furniture', value: 1 },
  { label: 'Chair', value: 2 },
  { label: 'Tv', value: 3 },
];

export default function ListingEditScreen() {
  const [category, setCategory] = useState('');

  return (
    <AppForm
      initialValues={{ title: '', price: '', category: null, description: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <AppFormField name='title' placeholder='Title' style={styles.inputBox} />
      <AppFormField
        name='price'
        placeholder='price'
        style={styles.inputBox}
        keyboardType='numeric'
      />
      <AppFormPicker
        name='category'
        items={items}
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        placeholder='Category'
        style={styles.inputBox}
      />
      <AppFormField
        name='description'
        numberOfLines={3}
        placeholder='Description'
        style={styles.inputBox}
      />
      <SubmitButton title='POST' />
    </AppForm>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    marginBottom: 10,
  },
});
