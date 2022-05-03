import Input from './Input';
import styles from './CreateAccountForm.module.scss';

function FormContainer () {
  const classes = {
    valid: styles.valid,
    invalid: styles.invalid,
  };
  return (
    <>
      <Input
        type='text'
        name='firstName'
        placeholder='First name'
        autoFocus={true}
        classes={classes}
      />
      <Input
        type='text'
        name='lastName'
        placeholder='Last name'
        classes={classes}
      />

      <Input
        type='text'
        name='displayName'
        placeholder='Display name'
        classes={classes}
      />
      <Input
        type='email'
        name='email'
        placeholder='Email Address'
        classes={classes}
      />

      <Input
        type='password'
        name='password'
        placeholder='Password'
        classes={classes}
      />
      <Input
        type='password'
        name='passwordConfirmation'
        placeholder='Password Confirmation'
        classes={classes}
      />
      <button className={styles.submitButton} type='submit'>
        Create account
      </button>
    </>
  );
}

export default FormContainer;
