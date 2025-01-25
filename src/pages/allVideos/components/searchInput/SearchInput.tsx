import * as React from "react";
import SearchIcon from "@assets/img/Search.svg?url";
import style from "./style.module.scss";
interface ISearchInputProps {
  setSearchRequest: Function;
}

const SearchInput = ({ setSearchRequest }: ISearchInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchRequest(e.currentTarget.value);
    }
  };

  return (
    <div className={style.all__video__search}>
      <div className={style.all__video__search__block}>
        <input
          className={style.all__video__search__block__input}
          type="search"
          placeholder="Поиск"
          id="search"
          onKeyDown={handleKeyPress}
        />
        <div className={style.all__video__search__block__icon__block}>
          <img
            className={style.all__video__search__block__icon}
            src={SearchIcon}
            alt="search-icon"
            onClick={() => {
              const searchInput = document.getElementById(
                "search"
              ) as HTMLInputElement;
              setSearchRequest(searchInput?.value || "");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
