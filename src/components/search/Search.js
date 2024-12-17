import { useRef, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setSearchValue } from "../../store/slices/filterSlice";
import debounce from "lodash.debounce";
import "./search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const { searchValue, activeCategory, sortData } = useSelector(selectFilter);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = searchValue;
  }, [searchValue, activeCategory, sortData]);

  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setSearchValue({ value }));
    }, 400),
    []
  );

  const onClearSearch = () => {
    setValue("");
    dispatch(setSearchValue({ value: "" }));
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className="search">
      <input
        ref={inputRef}
        onChange={onChangeInput}
        className="search__input"
        type="search"
        placeholder="Search"
        value={value}
      />
      <span
        onClick={onClearSearch}
        className={`search__clear ${value || searchValue ? "visible" : ""}`}
      >
        &times;
      </span>
    </div>
  );
};

export default Search;
