import { useDispatch, useSelector } from 'react-redux';
import { filterUpdate } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        value={filter}
        onChange={(ev) => dispatch(filterUpdate(ev.target.value))}
      />
    </label>
  );
};

export default Filter;
