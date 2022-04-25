import classNames from 'classnames';
import { Component } from 'react';
import styles from './SignUpForm.module.css';
import Label from './Label';

const NAME_REG_EXP = /^([A-Z]{1})([a-z]{3,15})$/;
const EMAIL_REG_EXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const PASSWORD_REG_EXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number

const INITIAL_VALUES = {
  email: '',
  name: '',
  password: '',
  passwordVerification: '',
};

class SifnUpForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      isEmailValid: false,
      password: '',
      isPasswordValid: false,
      passwordVerification: '',
      isPasswordVerificationValid: false,
      name: '',
      isNameValid: false,
    };
  }
  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: EMAIL_REG_EXP.test(value),
    });
  };
  handleNameChange = ({ target: { value } }) => {
    this.setState({
      name: value,
      isNameValid: NAME_REG_EXP.test(value),
    });
  };
  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: PASSWORD_REG_EXP.test(value),
    });
  };

  // handleChange = ({ target: { value, name } }, isFieldValid, typeRegExp) => {
  //   this.setState({
  //     [name]: value,
  //     isFieldValid: typeRegExp.test(value),
  //   });
  // };
  // я хотел создать универсальный обработчик, но не знаю как передать параметры в компоненте jsx-атрибутом
  // <Label
  //   onChange={this.handleChange(isFieldValid, typeRegExp)} <<<<
  // />
  // возможно ли такое реализовать?

  handlePasswordVerification = ({ target: { value, name } }) => {
    const { password } = this.state;
    this.setState({
      [name]: value,
      isPasswordVerificationValid:
        value === password && PASSWORD_REG_EXP.test(value),
    });
  };

  inputClassNames = isFieldValid => {
    return classNames(styles.input, {
      [styles.inputValid]: isFieldValid,
      [styles.inputInvalid]: !isFieldValid,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(INITIAL_VALUES);
  };
  render () {
    const {
      email,
      isEmailValid,
      password,
      isPasswordValid,
      passwordVerification,
      isPasswordVerificationValid,
      name,
      isNameValid,
    } = this.state;

    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <div className={styles.formName}>Sign up form</div>
        <Label
          classNames={this.inputClassNames(isNameValid)}
          value={name}
          type='name'
          name='name'
          placeholder='name'
          onChange={this.handleNameChange}
        />
        <Label
          classNames={this.inputClassNames(isEmailValid)}
          value={email}
          onChange={this.handleEmailChange}
          type='email'
          name='email'
          placeholder='email'
        />
        <Label
          classNames={this.inputClassNames(isPasswordValid)}
          value={password}
          type='password'
          name='password'
          placeholder='password'
          onChange={this.handlePasswordChange}
        />
        <Label
          classNames={this.inputClassNames(isPasswordVerificationValid)}
          value={passwordVerification}
          type='password'
          name='passwordVerification'
          placeholder='password verification'
          onChange={this.handlePasswordVerification}
        />

        <button className={styles.signUpButton} type='submit'>
          Sign up
        </button>
      </form>
    );
  }
}
export default SifnUpForm;
