import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form, FormLabel, FormBtn, Field } from './RegisterForm.styled';
import { register } from 'redux/auth/operations';

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={ContactShema}
      onSubmit={(values, actions) => {
        dispatch(register({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
        <FormLabel htmlFor="name">
          NAME
          <Field type="text" name="name" />
        </FormLabel>
        <FormLabel htmlFor="email">
          EMAIL
          <Field type="email" name="email" />
        </FormLabel>
        <FormLabel htmlFor="password">
          PASSWORD
          <Field type="password" name="password" />
        </FormLabel>
        <FormBtn type="submit">REGISTER</FormBtn>
      </Form>
    </Formik>
  );
};
