import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';


const recordBookPart = 15;
const RegistrationForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Name must be at least 3 characters').required('Required'),
    surname: Yup.string()
     .max(10 + recordBookPart, 'Surname must be no more than 10 characters')
     .required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
      .matches(/[^a-zA-Z0-9]/, 'Must contain at least one special character')
      .required('Required'),
    recordNumber: Yup.number()
      .min(1000, 'Record number must be at least 1000')
      .max(9999, 'Record number must be no more than 9999')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', surname: '', email: '', password: '', recordNumber: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div className={styles.field}>
          <label htmlFor="surname">Surname + Record Book Number</label>
          <Field name="surname" type="text" />
          <ErrorMessage name="surname" component="div" className={styles.error} />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" className={styles.error} />
        </div>

        <div className={styles.field}>
          <label htmlFor="recordNumber">Record Number</label>
          <Field name="recordNumber" type="number" />
          <ErrorMessage name="recordNumber" component="div" className={styles.error} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;