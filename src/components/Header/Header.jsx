import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Logo from '../../assets/images/Logo.svg';
import './Header.css';
import SearchBar from './SearchBarContainer';

const Header = () => (
    <header className="Header">
        <img src={Logo} width="120" alt="Bossjob" />
        <div className="search-btn-container">
            <FaSearch className="search-btn" />
            <h3>Search for job title or company name</h3>
        </div>
        <SearchBar />
        <button className="btn">Filter results</button>
    </header>
)

export default Header
