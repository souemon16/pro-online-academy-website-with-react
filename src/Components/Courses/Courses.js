import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const { name, instructor, level, price, rating, tag, image } = props.course;

    return (
        <div id="courses">
            <div className="col mb-4">
                <div className="card">
                    <img src={image} className="card-img-top" alt="course Images" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p><small>{instructor}</small></p>
                        <p>{rating}</p>
                        <h4><strong>{price}</strong></h4>
                        <p>{level}</p>
                        <span className="badge badge-pill badge-dark">{tag}</span>
                        <p><button onClick={() => props.handleAddCourses(props.course)} className="btn btn-outline-dark">Enroll Now</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;