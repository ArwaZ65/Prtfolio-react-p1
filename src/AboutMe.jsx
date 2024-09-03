import { Component } from 'react';
class AboutMe extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="about-me" id='about'>
                <div className='about'>
                    <p>About Me</p>
                </div>
                <div className='aside'>
                <div className='content'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti cumque ut quaerat, iste, consequatur ratione iure, repellat labore doloremque rem sed itaque nam quasi esse qui quia! Optio, modi!</p>

                </div>
                <button>Downlode Resume</button></div>
            </div>
        )}

}
export default AboutMe;
