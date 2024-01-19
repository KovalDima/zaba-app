import "./search.scss";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className="search">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        className="search__input"
        type="search"
        placeholder="Search"
        value={searchValue}
      />
    </div>
  );
};

export default Search;
