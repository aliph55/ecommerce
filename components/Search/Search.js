import React, { useRef, useState } from "react";
import { Pressable, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { scaleFontSize } from "../../assets/styles/scaling";

import style from "./style";

const Search = ({ onSearch, placeholder }) => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState("");

  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
    onSearch(searchValue);
  };
  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={"#25C0FF"}
        size={scaleFontSize(22)}
      />
      <TextInput
        placeholder={placeholder}
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        onChangeText={(value) => handleSearch(value)}
      />
    </Pressable>
  );
};

export default Search;
