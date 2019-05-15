import * as yup from 'yup';

const addDialogSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .required()
    .label('Name'),
  email: yup
    .string()
    .email()
    .required()
    .label('Email Address'),
  password: yup
    .string()
    .required()
    .label('Password'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Password does not match')
    .required()
    .label('Confirm Password'),
});

export default addDialogSchema;
