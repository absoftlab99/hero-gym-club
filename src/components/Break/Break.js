import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div className='p-2 justify-content-center'>
            <h4 className='ff-poppins fw-bold text-light'>Add a Break</h4>
            <div className="row bg-warning gap-2 p-3 py-4 rounded-3 break mx-0 ps-4">
                <div className="col-2 rounded-3 text-center p-0"><button className='btns btn btn-dark fw-bolder'>10s</button></div>
                <div className="col-2 rounded-3 text-center p-0"><button className='btns btn btn-dark fw-bolder'>15s</button></div>
                <div className="col-2 rounded-3 text-center p-0"><button className='btns btn btn-dark fw-bolder'>20s</button></div>
                <div className="col-2 rounded-3 text-center p-0"><button className='btns btn btn-dark fw-bolder'>25s</button></div>
                <div className="col-2 rounded-3 text-center p-0"><button className='btns btn btn-dark fw-bolder'>30s</button></div>
            </div>
        </div>
    );
};

export default Break;