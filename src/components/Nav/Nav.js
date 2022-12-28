import React, { useState } from 'react'
import './Nav.scss'
import { SiDevpost } from "react-icons/si";
import resume from '../../Assets/Kartik_26_12_22.pdf'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Nav() {
    const [activeCls, setactiveCls] = useState(false)
    function clickHandler() {
        setactiveCls(!activeCls)
    }
    return (
        <div>
            <div className='container'>
                <nav>
                    <div className="leftnav">
                        <SiDevpost color='#ff3f2f' id="devLogo" fontSize={45} />
                        <h3>Kartik Joshi</h3>
                    </div>
                    <div className={`HamburgerIconDiv ${activeCls && 'bgSecondary'}`} onClick={clickHandler} >
                        {activeCls ? <CloseIcon className="text-primary" /> : <MenuIcon className="text-primary" />}
                    </div>
                    <div className="rightnav">
                        <ul>
                            <li><a href="#SkillSection">Skills</a></li>
                            <li><a href="#ProjectSection">Projects</a></li>
                            <li><a href="#ExperienceSection">Experience</a></li>
                            <li><a href="#FaqSection">FAQ</a></li>
                            <li><a href="#ContactSection">Contact</a></li>
                            <li><a href={resume} download="Resume">Resume</a></li>
                        </ul>
                    </div>
                </nav>
                <ScrollAnimation animateIn="fadeInRight" className={`HamburgerMenu ${activeCls ? "show SideFadeIn" : "hide"}`}>
                    <ul>
                        <li><a href="#SkillSection">Skills</a></li>
                        <li><a href="#ProjectSection">Projects</a></li>
                        <li><a href="#ExperienceSection">Experience</a></li>
                        <li><a href="#FaqSection">FAQ</a></li>
                        <li><a href="#ContactSection">Contact</a></li>
                        <li><a href={resume} download="Resume">Resume</a></li>
                    </ul>
                </ScrollAnimation>
            </div>
        </div>
    )
}
