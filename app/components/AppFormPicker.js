import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from './AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({
  name,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  ...otherProps
}) {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
