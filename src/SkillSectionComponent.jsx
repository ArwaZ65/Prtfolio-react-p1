import { Component } from 'react';
class SkillSectionComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const skillList=[//percentage or progress
            {name:"HTML",percentage:90},
            {name:"CSS",percentage:80},
            {name:"JavaScript",percentage:70},
            {name:"React",percentage:60},
            {name:"Angular",percentage:50},
            {name:"Vue",percentage:40},
            {name:"Node",percentage:30},
            {name:"Python",percentage:20},
            ];
        const focusList=["UI/UX Design","Responsive Design","Web Design","Mobile App Design"]
        return (
            <>
            <div className='container' id='skills'>
                <div className='title'>
                    <h1>Skills</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati consequatur cupiditate, aut aperiam tenetur tempora voluptate nesciunt laudantium, possimus iste? Quod, mollitia tempora ipsa porro dolores maxime hic nisi.

                    </p>
                </div>
                <div className='flex-skills'>
                <div className='skillsFocus'>
                    {/* <u>
                        <li>UI\UX Design</li>
                        <li>Responsive Design</li>
                        <li>Web Design</li>
                        <li>Mobile App Design</li>
                    </u> */}
                    <h3>My Focus</h3>
                    {
                        focusList.map((focus, index) => (
                            <p key={index}>{focus}</p>
                        ))
                    }
                </div>
                <div className="skills-container">
                {skillList.map((skill) => (
                <div className="skill" key={skill.name}>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                <div className="skill-level" style={{ width: skill.percentage }}></div>
                </div>
              {/* <div className="skill-percentage">{skill.percentage}</div> */}
            </div>
          ))}
        </div>
                {/* <div className='skillpercentage'>
                    {
                        skillList.map((skill,index)=>(
                            <div key={index}>
                                <span>{skill.name}</span><progress id="file" value={skill.percentage} max="100"></progress>
                            </div>
                        ))
                    }
                </div> */}
                </div>
            </div>
            </>
        )
    }
}
export default SkillSectionComponent;