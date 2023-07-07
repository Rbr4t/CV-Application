import React, { Component } from 'react';
import '../styles/General.css'

class Skills extends Component {
    constructor() {
      super();
  
      this.state = {
        skills: [{ skill: 'coding' }, { skill: 'coding2' }],
        newSkill: '', // Add a new state variable to track the input value
      };
  
      this.addSkill = this.addSkill.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this); // Add an event handler for input change
    }

    callBackState(){
        console.log(this.state)
        this.props.callBackState(this.state);
    }

    addSkill(e) {
      e.preventDefault();
      const newSkills = [...this.state.skills, { skill: this.state.newSkill }];
      this.setState({ skills: newSkills, newSkill: '' });
      console.log(this.state)
      this.callBackState()
    }
  
    handleInputChange(e) {
      this.setState({ newSkill: e.target.value });
      this.callBackState()
    }
    
    render() {
      return (
        <div>
          {this.state.skills.map((skill, index) => (
            <div key={index}>
              <label htmlFor={`skill-${index}`}>Skill: </label>
              <input
                id={`skill-${index}`}
                value={skill.skill}
                onChange={(e) => {
                  const updatedSkills = [...this.state.skills];
                  updatedSkills[index].skill = e.target.value;
                  this.setState({ skills: updatedSkills });
                }}
              />
            </div>
          ))}
  
          
            
            <button onClick={this.addSkill}>Add Skill</button>
        </div>
      );
    }
  }

class SkillsCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // console.log(this.props.props.skills)
        if(this.props.props !== null) {
            return (
                <div>
                    <h1>Skills:</h1>
                    <ul>
                        {this.props.props.skills.map((prop) => {
                            return <li>{prop.skill}</li>
                        })}
                    </ul>
                </div>
            )
        }
        return 
    }
}


export default Skills
export { SkillsCV }