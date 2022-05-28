import React, { useEffect, useRef } from 'react'
import About from '../About/About'
import Intro from '../intro/Intro'
import Nav from '../Nav/Nav'
import PosterOne from '../Posters/PosterOne'
import Project from '../Projects/Project'
import './Home.scss'
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Experience from '../Experience/Experience'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Skill from '../Skills/Skill'
import PosterTwo from '../Posters/PosterTwo'
import HelpIcon from '@mui/icons-material/Help';
import Faq from '../Faq/Faq'
import Socialmedia from '../SocialMedia/Socialmedia'
import { BsArrowUpCircleFill } from "react-icons/bs";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Contact from '../contact/Contact'
import Footer from '../Footer/Footer'
import ScrollAnimation from 'react-animate-on-scroll';
//
function Home() {

    const scrolltop = useRef()
    //! adding move to top button with animation
    function onScroll(e) {
        if (e.path[1].scrollY > 60) {
            scrolltop.current.classList.add('active');
        } else {
            scrolltop.current.classList.remove('active');
        }
    }
    //! cleaning up the function calls at unmounting phase which better the performancr
    useEffect(() => {
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="BodyWrapper">
            <div id='Topsection' className='Intro-container'>
                <Nav></Nav>
                <Intro />
                <div className='Shadowbg overlayEffect'></div>
            </div>
            <ScrollAnimation animateIn="fadeInDown"><About /></ScrollAnimation>

            <PosterOne />
            <h2 className='text-center h2 HeadingColor' id='ProjectSection'>Projects <AiOutlineFundProjectionScreen /></h2>
            <ScrollAnimation id="ProjectAnimation" animateIn='fadeInDown'> <Project /></ScrollAnimation>


            {/*  */}
            <h2 className='text-center h2 HeadingColor' id='ExperienceSection'>Experience <WorkHistoryIcon fontSize='35' /></h2>
            <Experience />
            <ScrollAnimation animateIn="fadeInDown">
                <div className='bgprimary my-5 flexCenterDiv' id='SkillSection' style={{ height: "365px" }}>
                    <div className='container flexContainer p-1'>
                        <PosterTwo />
                        <Skill></Skill>
                    </div>
                </div>
            </ScrollAnimation>


            <h2 className='text-center h2 HeadingColor' id='FaqSection'>Faq <HelpIcon fontSize='35' /></h2>
            <ScrollAnimation animateIn="fadeIn"><Faq /></ScrollAnimation>
            <ScrollAnimation animateIn="fadeInDown"> <Socialmedia /></ScrollAnimation>

            <h2 className='text-center h2 HeadingColor' id='ContactSection'>Get in touch <ConnectWithoutContactIcon fontSize='35' /></h2>
            <ScrollAnimation animateIn="fadeIn"><Contact /></ScrollAnimation>

            <Footer />
            <a id="scrolltop" ref={scrolltop} href="#Topsection"><BsArrowUpCircleFill color='#ff3f2f' /></a>
        </div>
    )
}

export default Home