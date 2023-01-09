import { useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';
import styles from './ContactList.module.scss';
import Filter from '../Filter/Filter';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      <ul>
        {contacts.filter(contact => contact.name.includes(filter)).map((contact) => {
          return (
            <li key={contact.id} className={styles.contact}>
              {contact.name}: {contact.number} <DeleteButton id={contact.id} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
