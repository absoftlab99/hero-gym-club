import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div className='p-2 justify-content-center'>
            <h4 className='ff-poppins fw-bold text-light'>Add a Break</h4>
            <div className="row bg-warning gap-1 p-3 py-4 rounded-3 break mx-0">
                <div className="col-2 rounded-3 text-center"><button className='btn btn-dark fw-bolder'>10</button></div>
                <div className="col-2 rounded-3 text-center"><button className='btn btn-dark fw-bolder'>15</button></div>
                <div className="col-2 rounded-3 text-center"><button className='btn btn-dark fw-bolder'>20</button></div>
                <div className="col-2 rounded-3 text-center"><button className='btn btn-dark fw-bolder'>25</button></div>
                <div className="col-2 rounded-3 text-center"><button className='btn btn-dark fw-bolder'>30</button></div>
            </div>
        </div>
    );
};

export default Break;