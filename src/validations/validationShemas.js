import * as yup from 'yup';

export const CREATE_ACCOUNT_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(16)
    .matches(/^[A-Z][a-z]*$/, 'First name must start with a capital letter')
    .required(),
  lastName: yup
    .string()
    .trim()
    .min(2)
    .max(16)
    .matches(/^[A-Z][a-z]*$/, 'Last name must start with a capital letter')
    .required(),
  displayName: yup
    .string()
    .trim()
    .min(4)
    .max(16)
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Display name must consist of a letter, digit or symbol _'
    )
    .required(),
  email: yup
    .string()
    .email('Email must be valid')
    .matches(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      'Email must be valid'
    )
    .required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must have at least one uppercase letter, one lowercase letter and one number'
    )
    .required(),
  passwordConfirmation: yup
    .string()
    .when('password', {
      is: val => val && val.length > 0,
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Both password need to be the same'),
    })
    .required('Confirm Password Required'),
});
