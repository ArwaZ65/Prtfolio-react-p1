import { Component } from 'react';
import myimg from './me3.jpg';
class HeaderImageSectin extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="header-image-section" id='home'>
                <div className='imgclass'>
                <img src={myimg} ></img></div>
                <div className='name-img'>
                    <h1>Arwa Zakria</h1>
                    <h2>Fronend Developer</h2>
                
                <a href='#contact'><button>Contact me</button></a>
                </div>
            </div>
        )
}
}
export default HeaderImageSectin;
