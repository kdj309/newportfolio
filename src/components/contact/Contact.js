import React, { useRef, useState } from 'react'
import './Contact.scss'
import contactbg from '../../Assets/contactimg.jpg'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';

//
export default function Contact() {
    const [showAlert, setshowAlert] = useState(false)
    const [sucess, setsucess] = useState(false)
    const form = useRef();
    //! using emailjs to takes user data through emailjs
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qsvrrwq', 'template_8umtyw9', form.current, '_aOjS8zk8opCCpMQc')
            .then((result) => {
                form.current.reset()
                setsucess(true)
                setshowAlert(true)
                console.log(result.text);
            }, (error) => {
                form.current.reset()
                setsucess(false)
                setshowAlert(true)
                console.log(error.text);
            });
    };
    return (
        <div className="container Contact-container my-2">
            <div className='imgcontainer'>
                <img src={contactbg} alt='contactus' />
            </div>

            <form ref={form} onSubmit={sendEmail} className='form-container p-2'>
                {showAlert && <Alert className='my-2' severity={sucess ? "success" : "error"}>{sucess ? "Thank I got your message" : "Sorry some error occurred"}</Alert>}
                <div className="form-group">
                    <input type="text" name="username" id="name" placeholder='Name' />
                    <label htmlFor="name"><PersonIcon /></label>
                </div>
                <div className="form-group">
                    <input type="email" name="useremail" id="email" placeholder='Email' />
                    <label htmlFor="email"><MailIcon /></label>
                </div>
                <div className="form-group">
                    <input type="number" name="phoneno" id="phnumber" placeholder='Number' />
                    <label htmlFor="phnumber"><PhoneIcon /></label>
                </div>
                <div className="form-group">
                    <textarea name="usermsg" id="msg" cols="35" rows="8" ></textarea>
                    <label htmlFor="msg" id="chaticon"><ChatIcon /></label>
                </div>
                <button className="btn">Submit <FaTelegramPlane color="white" /></button>
            </form>
        </div>
    )
}
