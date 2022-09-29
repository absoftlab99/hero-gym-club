import React from 'react';
import './Times.css';

const Times = () => {
    return (
        <div className='p-2'>
            <h4 className='ff-poppins fw-bold text-light'>Exercise Details</h4>
            <div className="row bg-warning rounded-3 break mx-0">
                <div className="col-7 time"><h5 className=''>Exercise time</h5></div>
                <div className="col-5 times"><p className='text-muted'>200 seconds</p></div>
            </div>

            <div className="row bg-warning rounded-3 break mx-0 mt-4">
                <div className="col-7 time"><h5 className=''>Break time</h5></div>
                <div className="col-5 times"><p className='text-muted'>30 seconds</p></div>
            </div>
        </div>
    );
};

export default Times;