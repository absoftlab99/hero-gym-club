import React from 'react';
import profile from '../../images/mahmud.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <div>
            <div className='pt-5 p-2 profile'>
            <div className="img">
                <img className='profile-img border' src={profile} alt="" />
            </div>
            <div className="info ps-2 ff-poppins">
                <div className="name">
                    <h5 className='fw-bolder text-light'>Abdullah Al Mahmud</h5>
                </div>
                <div className="text-light text-opacity-75">
                    <p><i class="fa-solid fa-location-dot"></i> Dinajpur, Bangladesh</p>
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
        </div>
    );
};

export default Profile;