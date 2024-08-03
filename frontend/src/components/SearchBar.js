import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css';

const SearchBar = ({ placeholder }) => {
    return (
        <form className='custom-searchbar'>
            <input type="text" id="search-bar" placeholder={placeholder} />
            <FaSearch className="icon" />
        </form>
    );
};

export default SearchBar;
