import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from './AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({
  name,
  items,
  numberOfColumns,
  onSelectItem,
  PickerItemComponent,
  placeholder,
  selectedItem,
  width,
  ...otherProps
}) {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={item => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
