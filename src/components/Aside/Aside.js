import React from 'react';
import Break from '../Break/Break';
import Button from '../Button/Button';
import Profile from '../Profile/Profile';
import Times from '../Times/Times';
import './Aside.css';

const Aside = () => {
    return (
        <div className='col-lg-3 col-md-5 col-sm-12 bg-dark'>
            <Profile></Profile>
            <Break></Break>
            <Times></Times>
            <Button></Button>
        </div>
    );
};

export default Aside;