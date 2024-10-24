import React from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import AddCommentForm from './components/AddCommentForm/AddCommentForm';
import LoginForm from './components/LoginForm/LoginForm';
import AddProductForm from './components/AddProductForm/AddProductForm';

const App = () => {
  return (
      <div style={{ padding: '20px' }}>
      <h1>React Formik Forms</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>Registration Form</h2>
        <RegistrationForm />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Add Comment Form</h2>
        <AddCommentForm />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Login Form</h2>
        <LoginForm />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Add Product Form</h2>
        <AddProductForm />
      </section>
    </div>
  );
};

export default App;