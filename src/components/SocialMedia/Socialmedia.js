import React from 'react'
import './Socialmedia.scss'
import linkedinprofile from '../../Assets/Linkedinprofile.jpeg'
import githubprofile from '../../Assets/githubprofile.jpeg'
import twitterprofile from '../../Assets/twitterProfile.jpeg'
export default function Socialmedia() {
    return (
        <div className="container SocialMedia-container my-3">
            <h3>Let's get connected <br /> <span>on social media</span> </h3>
            <div className="mainContainer">
                <a className='dashboarditem mx-1' target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/karthik-joshi-5885701a2/'>
                    <img className="image" src={linkedinprofile} alt="" />
                    <div className="hoverwrapper">
                        <div className='linkedinhover'></div>
                    </div>
                </a>
                <a className='dashboarditem mx-1' target='_blank' rel="noreferrer" href='https://github.com/kdj309'>
                    <img className="image" src={githubprofile} alt="" />
                    <div className="hoverwrapper">
                        <div className='githubhover'></div>
                    </div>
                </a>
                <a className='dashboarditem mx-1' target='_blank' rel="noreferrer" href='https://twitter.com/kartikj17157349'>
                    <img className="image" src={twitterprofile} alt="" />
                    <div className="hoverwrapper">
                        <div className='twitterinhover'></div>
                    </div>
                </a>
            </div>
        </div>
    )
}
