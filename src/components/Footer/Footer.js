import React from 'react'
import './Footer.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { SiDevpost } from "react-icons/si";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
    return (
        <div className="FooterWrapperContainer p-2 mt-2">
            <div className="container footerMaincontainer py-2">
                <div className='FooterIntro'>
                    <h2 className="text-primary">Joshi's Portfolio <SiDevpost /></h2>
                    <p>Thank you for visiting my personal portfolio website</p>
                    <q>Be brave to stay out of your comfort zone.</q>
                    <h4>Connect with me over live chat!</h4>
                </div>
                <div className='FooterLinks'>
                    <h2>Quick Links</h2>
                    <ul className='quickLinks'>
                        <li><a href="#Topsection">Home</a></li>
                        <li><a href="#SkillSection">Skills</a></li>
                        <li><a href="#ExperienceSection">Experience</a></li>
                        <li><a href="#ProjectSection">Projects</a></li>
                    </ul>
                </div>
                <div className='FooterPersonaldetails'>
                    <h2>Contact Info</h2>
                    <div className='iconcontainer'><PhoneIcon className="PersonaldetailsIcons" /><a href="tel:+919972564763">9972564763</a></div>
                    <div className='iconcontainer'><EmailIcon className="PersonaldetailsIcons" /><a href="mailto:karthik.joshi103@gmail.com">karthik.joshi103@gmail.com</a></div>
                    <div className='iconcontainer'><LocationCityIcon className="PersonaldetailsIcons" /><p> Gulbarga,Karnataka-585102</p></div>
                    <div className="socialMediaQuickLinks">
                        <a href='https://www.linkedin.com/in/karthik-joshi-5885701a2/'><LinkedInIcon className="socialMediaIcons" /> </a>
                        <a href='https://github.com/kdj309'> <GitHubIcon className="socialMediaIcons" /></a>
                        <a href='https://twitter.com/kartikj17157349'><TwitterIcon className="socialMediaIcons" /> </a>
                        <a href='https://t.me/Dev_kdj'><TelegramIcon className="socialMediaIcons" /> </a>
                    </div>
                </div>

            </div>
            <hr className="my-1 hrtag" />
            <div style={{ width: "max-content", margin: "auto", display: 'flex', alignItems: "center" }}> <p className='text-center text-light'>Made with </p><FavoriteIcon className="text-primary mx-1 animateText" /> </div>

        </div>
    )
}
