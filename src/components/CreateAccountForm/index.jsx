import { Form, Formik } from 'formik';
import { CREATE_ACCOUNT_SCHEMA } from './../../validations/validationShemas';
import FormHeader from './FormHeader';
import FormContainer from './FormContainer';
import styles from './CreateAccountForm.module.scss';
// import Input from './Input';

function CreateAccountForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const handleSubmit = (values, formikBag) => {
    console.log('values', values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CREATE_ACCOUNT_SCHEMA}
    >
      <div className={styles.formWrapper}>
        <Form className={styles.formContainer}>
          <FormHeader />
          <div className={styles.mainWrapper}>
            <FormContainer />
          </div>
        </Form>
      </div>
    </Formik>
  );
}

export default CreateAccountForm;
