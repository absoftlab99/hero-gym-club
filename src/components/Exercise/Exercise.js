import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {name, age, time, description, picture} = props.exercise;

    const addToListHandler = (exercise) => {
        props.addTotalTime(exercise);
    }
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 pb-4 text-dark'>
            <div className="card rounded-4">
                <img className="p-3 pb-0" src={picture} alt=""/>
                <div className="card-body">
                    <h5 className="card-title fw-bolder">{name}</h5>
                    <small className="card-text text-justify text-muted">{description}</small>
                    <h6 className='pt-4'>For Age: <span className='fw-bolder'>{age}</span></h6>
                    <h6 className='time p-0'>Time required: <span className='fw-bolder' id='time'>{time}</span>s</h6>
                </div>
                <button onClick={()=> addToListHandler(props.exercise)} className="btn btn-warning m-3 mt-0 rounded-3">Add To List</button>
            </div>
        </div>
    );
};

export default Exercise;