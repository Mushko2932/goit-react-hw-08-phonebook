import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { Form, FormLabel, FormBtn, Field } from './ContactsForm.styled';
import { register } from 'redux/auth/operations';
import { addContact } from 'redux/auth/operations';

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

  const handleSubmit = newContact => {
    if (
      contacts.filter(
        contact =>
          contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      ).length > 0
    ) {
      Notiflix.Notify.warning(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
  };
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
          Name
          <Field type="text" name="name" />
        </FormLabel>
        <FormLabel htmlFor="phone">
          Number
          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
};
