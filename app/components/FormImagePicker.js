import { useFormikContext } from 'formik';
import React from 'react';
import AppImageList from './AppImageList';
import ErrorMessage from './ErrorMessage';

export default function FormImagePicker({ name }) {
  const { values, errors, setFieldValue, touched } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = uri => {
    setFieldValue(
      name,
      imageUris.filter(imgUri => imgUri !== uri)
    );
  };

  return (
    <>
      <AppImageList
        images={values[name]}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}
