import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form, FormLabel, FormBtn, Field } from './RegisterForm.styled';
import { register } from 'redux/auth/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(6, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        dispatch(register({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
        <FormLabel htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            required
            placeholder="Enter name ..."
          />
        </FormLabel>
        <FormLabel htmlFor="email">
          Email
          <Field
            type="email"
            name="email"
            required
            placeholder="Enter email ..."
          />
        </FormLabel>
        <FormLabel htmlFor="password">
          Password
          <Field
            type="password"
            name="password"
            required
            placeholder="Enter password ..."
          />
        </FormLabel>
        <FormBtn type="submit">REGISTER</FormBtn>
      </Form>
    </Formik>
  );
};
