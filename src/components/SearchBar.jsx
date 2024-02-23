import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    setSearchText('');
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
      <input
        type="text"
        placeholder="Product name here"
        value={searchText}
        onChange={handleInputChange}
      />
      <i
        className={`search-icon ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleSearch}
      >
         {/* <FontAwesomeIcon icon={faSearch} /> */}
      </i>
    </div>
  );
}

export default SearchBar;
