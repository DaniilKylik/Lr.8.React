import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './AddCommentForm.module.css';

const AddCommentForm = () => {
  const validationSchema = Yup.object({
    comment: Yup.string().required('Comment is required'),
  });

  return (
    <Formik
      initialValues={{ comment: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="comment">Comment</label>
          <Field as="textarea" name="comment" />
          <ErrorMessage name="comment" component="div" className={styles.error} />
        </div>
        <button type="submit">Submit Comment</button>
      </Form>
    </Formik>
  );
};

export default AddCommentForm;