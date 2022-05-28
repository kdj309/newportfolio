import React, { useState } from 'react'
import './Description.scss'
import profile from '../../Assets/profilepic.jpeg'
import { HiOutlinePlus, HiOutlineMinusSm } from "react-icons/hi";
import Tilt from 'react-parallax-tilt';
//
function About() {

    const [showansone, setshowansone] = useState(false)
    const [showanstwo, setshowanstwo] = useState(false)
    const [showansthree, setshowansthree] = useState(false)


    return (
        <div className='container AboutContainer my-3'>
            <div className='AccordianMain-Container'>
                <h2 className='py-1'>What  to expect from my work</h2>
                <div className="accordiandiv">
                    <div className="accordianitem">
                        <div className="questiondiv">
                            <h3 className='question'>Development</h3>
                            <button className='btn' onClick={() => setshowanstwo((previous) => !previous)}>{showanstwo ? <HiOutlineMinusSm color='#ff3f2f' fontSize={30} /> : <HiOutlinePlus color='#ff3f2f' fontSize={30} />}</button>
                        </div>
                        <div className='text-div'>
                            {showanstwo && <p className='ans'>I Like to develop web based solutions to modern problems</p>}
                        </div>
                    </div>
                    <hr />
                    <div className="accordianitem">
                        <div className="questiondiv">
                            <h3 className='question'>Design</h3>
                            <button className='btn' onClick={() => setshowansone((previous) => !previous)}>
                                {showansone ? <HiOutlineMinusSm color='#ff3f2f' fontSize={30} /> : <HiOutlinePlus color='#ff3f2f' fontSize={30} />}</button>
                        </div>
                        <div className='text-div'>
                            {showansone && <p className='ans'>Designing and implenting pleasent UI is first Priority in Development</p>}
                        </div>
                    </div>
                    <hr />
                    <div className="accordianitem">
                        <div className="questiondiv">
                            <h3 className='question'>Strategy</h3>
                            <button className='btn' onClick={() => setshowansthree((previous) => !previous)}>
                                {showansthree ? <HiOutlineMinusSm color='#ff3f2f' fontSize={30} /> : <HiOutlinePlus color='#ff3f2f' fontSize={30} />}
                            </button>
                        </div>
                        <div className='text-div'>
                            {showansthree && <p className='ans'>Software Engineering is all about solving particular problem And I always try to solve that effeciently</p>}
                        </div>
                    </div>
                </div>
            </div>
            <Tilt className='profile-div mx-1'>
                <img src={profile} alt="profile" />
            </Tilt>
        </div>
    )
}
export default React.memo(About)