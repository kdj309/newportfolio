import React from 'react'
import './projectItem.scss'
import { AiFillEye } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import Tilt from 'react-parallax-tilt';

export default function Projectitem({ projectimg, projectTitle, projectLink, projectDescription, gitrepo,isActive }) {

    return (
        <Tilt className="MaincardItem">
            <div className="card">
                <img src={projectimg} className='card__image' alt='projectimg' />
                <div className='btn-container'>
                    {isActive&&<a href={projectLink} className='btn' id='Viewbtn'>View <AiFillEye /></a>}
                    <a href={gitrepo} className='btn' id='Codebtn'>Code <BiCodeAlt /></a>
                </div>
            </div>
            <div className='overlay visibilityCls'>
                <h3>{projectTitle}</h3>
                <div className="content">
                    <p>
                        {projectDescription}
                    </p>
                </div>
            </div>
        </Tilt>

    )
}

