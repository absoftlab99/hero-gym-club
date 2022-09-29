import React from 'react';
import profile from '../../images/mahmud.jpg';
import './Aside.css';

const Aside = () => {
    return (
        <div className='col-lg-3 col-md-5 col-sm-12 bg-dark'>
            <div className='pt-5 p-2 profile row'>
                <div className="col-3">
                    <img className='profile-img border' src={profile} alt="" />
                </div>
            <div className="col-9 info ps-2 ff-poppins">
                <div className="name">
                    <h5 className='fw-bolder text-light'>Abdullah Al Mahmud</h5>
                </div>
                <div className="text-light text-opacity-75">
                    <p><i className='fa-solid fa-location-dot'></i> Dinajpur, Bangladesh</p>
                </div>
            </div>
        </div>
        <div className="row text-center bg-warning pt-4 p-2 m-2 rounded-3 ff-poppins">
            <div className="col-4">
                <div className="">
                    <h3 className='fw-bolder'>74<sub className='text-muted'>kg</sub></h3>
                    <p className='text-dark pt-2'>Weight</p>
                </div>
            </div>
            <div className="col-4">
                <div className="">
                    <h3 className='fw-bolder'>163<sub className='text-muted'>cm</sub></h3>
                    <p className='text-dark pt-2'>Height</p>
                </div>
            </div>
            <div className="col-4">
                <div className="">
                    <h3 className='fw-bolder'>23<sub className='text-muted'>yrs</sub></h3>
                    <p className='text-dark pt-2'>Age</p>
                </div>
            </div>
        </div>
        
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
        
        <div className='p-2'>
            <h4 className='ff-poppins fw-bold text-light'>Exercise Details</h4>
            <div className="row bg-warning rounded-3 break mx-0">
                <div className="col-7 time"><h5 className=''>Exercise time</h5></div>
                <div className="col-5 times"><p className='text-muted'><span id='exercise-time'>0</span> seconds</p></div>
            </div>

            <div className="row bg-warning rounded-3 break mx-0 mt-4">
                <div className="col-7 time"><h5 className=''>Break time</h5></div>
                <div className="col-5 times"><p className='text-muted'><span id='break-time'>0</span> seconds</p></div>
            </div>
        </div>
        
        <div className='p-3'>
            <button className='btn btn-success btn-lg w-100 ff-poppins'>Activity Completed</button>
        </div>
        </div>
    );
};

export default Aside;