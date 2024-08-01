import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const searchName = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div>
      <label className={css.label} htmlFor={searchName}>
        Find contacts by name or number
      </label>
      <input
        type="text"
        name="searchName"
        id={searchName}
        value={filter}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
}
