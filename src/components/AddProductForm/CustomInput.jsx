import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './AddProductForm.module.css';

const CustomInput = ({ label, name, type }) => (
  <div className={styles.field}>
    <label htmlFor={name}>{label}</label>
    <Field name={name} type={type} />
    <ErrorMessage name={name} component="div" className={styles.error} />
  </div>
);

export default CustomInput;