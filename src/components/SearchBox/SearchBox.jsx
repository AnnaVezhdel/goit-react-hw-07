import { useSelector, useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.searchBox}>
      <label>
        <span>Find contacts by name</span>
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </div>
  );
};

export default SearchBox;
