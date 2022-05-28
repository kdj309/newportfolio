import React from 'react'
import './Skill.scss'
import jslogo from '../../Assets/javascriptlogo.png'
import htmllogo from '../../Assets/htmllogo.png'
import csslogo from '../../Assets/css3logo.png'
import bootstraplogo from '../../Assets/bootstraplogo.png'
import reactlogo from '../../Assets/reactlogo.png'
import nodejslogo from '../../Assets/nodejslogo.png'
import expressjslogo from '../../Assets/expressjslogo.png'
import firebaselogo from '../../Assets/firebaselogo.png'
import mongodblogo from '../../Assets/mongodblogo.png'
import mysqllogo from '../../Assets/mysqllogo.png'
import reduxlogo from '../../Assets/reduxlogo.png'
import sasslogo from '../../Assets/sasslogo.png'


import { AiFillStar, AiOutlineStar } from "react-icons/ai";
//
export default function Skill() {
    return (
        <div className='SkillParentContainer py-1'>
            <h3>Skills</h3>
            <div className='Skillcontainer'>
                <ul>
                    <li className='skill'>
                        <img src={jslogo} alt="" srcSet="" />
                        <span>
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiOutlineStar color='#ff3f2f' className="mobileSkillImg" />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={htmllogo} alt="" srcSet="" />

                        <span>
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiOutlineStar color='#ff3f2f' className="mobileSkillImg" />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={csslogo} alt="" srcSet="" />

                        <span>
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiFillStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiOutlineStar color='#ff3f2f' className="mobileSkillImg" />
                            <AiOutlineStar color='#ff3f2f' className="mobileSkillImg" />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={bootstraplogo} alt="" srcSet="" />

                        <span>
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={reactlogo} alt="" srcSet="" />
                        <span>
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={nodejslogo} alt="" srcSet="" />

                        <span>
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={expressjslogo} alt="" srcSet="" />

                        <span>
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={firebaselogo} alt="" srcSet="" />

                        <span>
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={mongodblogo} alt="" srcSet="" />

                        <span>
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={mysqllogo} alt="" srcSet="" />

                        <span>
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={reduxlogo} alt="" srcSet="" />

                        <span>
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                        </span>
                    </li>
                    <li className='skill'>
                        <img src={sasslogo} alt="" srcSet="" />

                        <span>
                            <AiFillStar color='#ff3f2f' />
                            <AiFillStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                            <AiOutlineStar color='#ff3f2f' />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
