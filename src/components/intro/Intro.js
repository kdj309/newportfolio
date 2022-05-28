import React from 'react'
import './intro.scss'
import TypewriterComponent from 'typewriter-effect'
import { FiArrowDownCircle } from "react-icons/fi";
//
export default function Intro() {



    return (
        <>
            <div className='inrto-main p-1'>
                <div className='text-content'>
                    <h2>Hi There <br />I'm Kartik Joshi <br /> I am into<br />
                        <span>
                            <TypewriterComponent
                                options={{
                                    strings: ['Web development', 'Backend development', 'web design'],
                                    autoStart: true,
                                    loop: true,
                                }} />
                        </span>
                    </h2>
                </div>
            </div>
            <button className='btn' id='downarrow'><FiArrowDownCircle fontSize={50} color='#ff3f2f' /></button>
        </>

    )
}
