import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {name, age, time, description, picture} = props.exercise;
    return (
        <div className='col-4 pb-4 text-dark'>
            <div className="card rounded-4">
                <img className="p-3 pb-0" src={picture} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <small className="card-text text-justify">{description}</small>
                    <h6 className='pt-2'>For Age: {age}</h6>
                    <h6>Time required: {time}</h6>
                </div>
                <button className="btn btn-warning m-3 mt-0 rounded-3">Add To List</button>
            </div>
        </div>
    );
};

export default Exercise;