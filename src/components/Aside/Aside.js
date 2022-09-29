import React from 'react';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';
import Times from '../Times/Times';
import './Aside.css';

const Aside = () => {
    return (
        <div className='col-3 bg-dark'>
            <Profile></Profile>
            <Break></Break>
            <Times></Times>
        </div>
    );
};

export default Aside;