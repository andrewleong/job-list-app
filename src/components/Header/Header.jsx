import React from 'react'

import Logo from '../../assets/images/Logo.svg';
import './Header.css';
import SearchBar from './SearchBarContainer';

const Header = () => (
    <header className="Header">
        <img src={Logo} width="120" alt="Bossjob" />
        <h3>Search for job title or company name</h3>
        <SearchBar />
        <button className="btn">Filter results</button>
    </header>
)

export default Header
