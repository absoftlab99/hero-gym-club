import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='container bg-dark rounded-3'>
            <h1 className='display-5 fw-bolder p-4 text-warning'><i className='fa-solid fa-dumbbell fa-bounce'></i> Hero Club</h1>
        </div>
    );
};

export default Header;