import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';

const Main = ({addTotalTime}) => {
    const [exercises, setExcercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExcercises(data));
    },[])
    return (
        <div className='col-lg-9 col-md-7 col-sm-12 px-5 pt-5 ff-poppins'>
            <Header></Header>
            <h1 className='text-dark ps-2 pb-4 pt-4 fw-bolder'>Select today’s exercise</h1>
            <div className="row container m-0 p-0">
            {
                exercises.map(exercise => <Exercise
                    key={exercise.id}
                    exercise ={exercise}
                    addTotalTime={addTotalTime}
                    ></Exercise>)
            }
            </div>
            <Blogs></Blogs>
        </div>
    );
};

export default Main;