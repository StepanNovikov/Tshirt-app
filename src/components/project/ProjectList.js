import React from 'react';
import Project from './Project';

const imgBase = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/"

const ProjectList = ({design}) => {
    return (
        <div className="item text-center">
            <div className="card card-body">
                <img className="img-fluid" src={`${imgBase}${design.tshirtColor}`} alt="t-shirt"/>
                <p>{design.name}</p>
                <button className="btn btn-primary btn-sm">View Project</button>
            </div>
        </div>
    )
}

export default ProjectList