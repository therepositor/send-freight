import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import fontawesome from '@fortawesome/fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// fontawesome.library.add(faMagnifyingGlass)


    

const Header = () => {
    return (
        <header>
            <a className='send-freight-logo' href='/'>Send Freight</a>
            <form className='form-search'>
                <input type='search' id='search' placeholder='search' />
                {/* <FontAwesomeIcon icon='fas fa-magnifying-glass' /> */}
            </form>
            <div className='header-button-container'>
                <button className='button request-quote' type='button'>Request Quote</button>
                <button className='button book-shipment' type='button'>Book Shipment</button>
            </div>
        </header>
    )
}

export default Header
