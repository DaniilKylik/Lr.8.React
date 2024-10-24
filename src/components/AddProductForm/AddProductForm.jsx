import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from './CustomInput';
import styles from './AddProductForm.module.css';

const AddProductForm = () => {
  const validationSchema = Yup.object({
    productName: Yup.string().required('Required'),
    price: Yup.number().min(0, 'Price must be positive').required('Required'),
  });

  return (
    <Formik
      initialValues={{ productName: '', price: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={styles.form}>
        <CustomInput label="Product Name" name="productName" type="text" />
        <CustomInput label="Price" name="price" type="number" />
        <button type="submit">Add Product</button>
      </Form>
    </Formik>
  );
};

export default AddProductForm;