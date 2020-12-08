import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
    return (
        <>
            <div className="search-form">
                <nav className="search-form__navbar">
                    <ul id="search-menu">
                        <li className="search-menu__link search-menu__link-active"><a href="#">BASIC SEARCH</a></li>
                        <li className="search-menu__link"><a href="#">ADVANCED SEARCH</a></li>
                    </ul>
                </nav>
                <div className="search-form__fields-wrapper">
                    <div className="search-form__fields">
                        <form className="search-form__input">
                            <input type="text" id="search_input"
                                   value={props.search}
                                   onChange={event => props.setSearch(event.target.value)}
                                   placeholder='John Smith/Джон Смит'/>
                            <img
                                src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857185.svg"
                                alt="icon"
                                className="search-icon"/>
                        </form>
                        <div className="search-form__button">
                            <button type="submit" onClick={props.onSearchRequest} id="search_button">SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchBar;