import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import styles from './DeleteButton.module.scss';

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  return <button className={styles.button} onClick={() => dispatch(deleteContact(id))}>Delete</button>;
};

export default DeleteButton;
