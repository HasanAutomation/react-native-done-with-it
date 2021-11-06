import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';
import SubmitButton from '../components/SubmitButton';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().moreThan(1).lessThan(10000).label('Price'),
  category: Yup.object().nullable().required().label('Category'),
  images: Yup.array()
    .min(1, 'Please select at least one image')
    .max(3, 'You can select maximum 3 images'),
});

const items = [
  { label: 'Furniture', value: 1, icon: 'apps', backgroundColor: 'green' },
  { label: 'Chair', value: 2, icon: 'email', backgroundColor: 'pink' },
  { label: 'Tv', value: 3, icon: 'lock', backgroundColor: 'blue' },
];

export default function ListingEditScreen() {
  const [category, setCategory] = useState('');

  const { location } = useLocation();

  return (
    <AppForm
      initialValues={{
        title: '',
        price: '',
        category: null,
        description: '',
        images: [],
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <FormImagePicker name='images' />

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
