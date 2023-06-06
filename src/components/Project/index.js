/*
This is the decoration part for each individual projects.
This file used bootstrap kitchen sink card to make the project information look orgainized.
*/
import React from 'react';

function Project (props){
    
    return (
        <div className='card center'>
            {props.projects.map((project) => (
                <div className="card" style={{width: "20rem"}}>
                    <img className="card-img-top" src={require(`../../assets/images/${project.screenshot}`)} alt="Jean's projects from githubs"/>
                    <div className="card-body">
                        <h5 className="card-title">{project.projectName}</h5>
                        <p className="card-text">{project.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Made by {project.madeby}</li>
                    </ul>
                    <div className="card-body">
                        <a href={project.deployed} className="card-link">Website</a>
                        <a href={project.github} className="card-link">Repository</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;