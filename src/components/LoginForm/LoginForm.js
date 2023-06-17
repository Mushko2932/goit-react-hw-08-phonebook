import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form, FormLabel, FormBtn, Field } from './ContactsForm.styled';
import { logIn } from 'redux/auth/operations';

const ContactShema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ContactShema}
      onSubmit={(values, actions) => {
        dispatch(logIn({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
        <FormLabel htmlFor="email">
          EMAIL
          <Field type="email" name="email" />
        </FormLabel>
        <FormLabel htmlFor="password">
          PASSWORD
          <Field type="password" name="password" />
        </FormLabel>
        <FormBtn type="submit">LOG IN</FormBtn>
      </Form>
    </Formik>
  );
};
