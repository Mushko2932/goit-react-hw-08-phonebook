import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Section } from 'components/Section/Section';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Modal } from 'components/Modal/Modal';
import { NewContactBtn } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isShowModalAddUser, setIsShowModalAddUser] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsShowModalAddUser(prev => !prev);
  };

  return (
    <div>
      <Section>
        <div>
          <h2>CONTACTS</h2>
          <div>
            <SearchForm />
            <NewContactBtn type="button" onClick={handleOpenModal}>
              Add contact
            </NewContactBtn>
          </div>
        </div>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Section>
      {isShowModalAddUser && (
        <Modal
          children={
            <Section title="Add New Contact">
              <ContactsForm onCloseModal={handleOpenModal} />
            </Section>
          }
          onCloseModal={handleOpenModal}
        ></Modal>
      )}
    </div>
  );
};

export default Contacts;
