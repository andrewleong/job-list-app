import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Logo from '../../assets/images/Logo.svg';
import './Header.css';
import SearchBar from '../SearchBar';

const Header = ({ onSubmit }) => (
    <header className="header">
        <div className="img-wrapper">
            <img src={Logo} width="120" alt="Bossjob" />
        </div>
        <div className="search-wrapper">
            <div className="search-btn-wrapper">
                <FaSearch className="search-btn" onClick={onSubmit} />
                <h3>Search for job title or company name</h3>
            </div>
            <SearchBar />
            <button className="filter-btn">Filter results</button>
        </div>
    </header>
)

export default Header
