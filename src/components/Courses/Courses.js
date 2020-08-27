import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const { name, img, price } = props.courses;
    const addCourse = props.addCourse;
    return (
        <div className="col-md-4 mt-4">
            <div >
                <div className="card  courseDetails rounded">
                    <div className="inner rounded">
                        <img className=" images" src={img} alt={name}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{name}</h5>
                        <h4>${price}</h4>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, pariatur.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                        <button onClick={() =>addCourse(props.courses)} className="btn btn-success btn-lg btn-block">ENROLL NOW</button>
                    </div>
                </div>              
            </div>
        </div>
    );
};

export default Courses;