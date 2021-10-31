import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().moreThan(1).lessThan(10000).label('Price'),
  category: Yup.object().nullable().required().label('Category'),
});

const items = [
  { label: 'Furniture', value: 1, icon: 'apps', backgroundColor: 'green' },
  { label: 'Chair', value: 2, icon: 'email', backgroundColor: 'pink' },
  { label: 'Tv', value: 3, icon: 'lock', backgroundColor: 'blue' },
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
        width={120}
        keyboardType='numeric'
      />
      <AppFormPicker
        name='category'
        numberOfColumns={3}
        items={items}
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        PickerItemComponent={CategoryPickerItem}
        placeholder='Category'
        width='50%'
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
