import { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
// import {fasfaat} from "@fortawesome/free-brands-svg-icons"
// import {fasfamobilealt} from "@fortawesome/free-brands-svg-icons"
class ContactSection extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="contact-section" id='contact'>
                <ul className='contact-items'>
                    <li><a><FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
                    </a></li>
                    <li><a><FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
                    </a></li>
                    <li><a><FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
                    </a></li>                
                </ul>
                <div className='fixed'>
                <p>Copyright&copy;2024</p>
                <p>&hearts;Made by:Arwa Zakria</p></div>
                {/* <div className='callme'>
                    <p>Get In Touch</p>
                    <a href="mailto:arwazakria2003@gmail.com" class="btn contact-details">
                    <FontAwesomeIcon icon={fasfaat} ></FontAwesomeIcon></a>
                    <a href="tel:001279046015" class="btn contact-details">
                    <FontAwesomeIcon icon={fasfamobilealt} ></FontAwesomeIcon><i class="fas fa-mobile-alt"></i> Call me</a>
                    </div> */}
            </div>
        )
    }
}
export default ContactSection;