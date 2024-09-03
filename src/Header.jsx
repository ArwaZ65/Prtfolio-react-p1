import { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
class Header extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="header">
                <ul>
                    <li className='nav'><a href='#home'>Home</a></li>
                    <li className='nav'><a href='#about'>About</a></li>
                    <li className='nav'><a  href='#skills'>Skills</a></li>
                    <li className='nav'><a href='#project'>Projects</a></li>
                    <li className='nav'><a href='#contact'>Contact</a></li>
                </ul>
                <ul className='social-items'>
                    <li><a><FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
                    </a></li>
                    <li><a><FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
                    </a></li>
                    <li><a><FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
                    </a></li>
                
                </ul>
            </div>
        )
}
}
export default Header;
