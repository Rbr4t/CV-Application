import { Component } from 'react';
import '../styles/General.css'
import '../styles/Work.css'

class Experience extends Component {
    constructor() {
      super();
  
      this.state = {
        experiences: [{company: '', role: '', period: '', extra: ''}],
      };
  
      this.addExperience = this.addExperience.bind(this);
    }

    callBackState(){
        this.props.callBackState(this.state);
    }

    addExperience(e) {
      e.preventDefault();
      const newExperienceArray = [...this.state.experiences, {company: '', role: '', period: '', extra: ''}]
      this.setState({experiences: newExperienceArray})
      this.callBackState()
    }
    
    render() {
      return (
        <div className='panel-input'>
          {this.state.experiences.map((obj, index) => (

            <div key={index} className='form-elements'>
              <label htmlFor={`company-${index}`}>Company: </label>
              <input
                id={`company-${index}`}
                value={obj.company}
                onChange={ (e) => {
                  const updatedexperiences = [...this.state.experiences];
                  updatedexperiences[index].company = e.target.value;
                  this.setState({ experiences: updatedexperiences });
                  this.callBackState()
                }}
              />

              <label htmlFor={`role-${index}`}>Role: </label>
              <input
                id={`role-${index}`}
                value={obj.role}
                onChange={(e) => {
                  const updatedexperiences = [...this.state.experiences];
                  updatedexperiences[index].role = e.target.value;
                  this.setState({ experiences: updatedexperiences });
                  this.callBackState()
                }}
              />

              <label htmlFor={`period-${index}`}>When started?: </label>
              <input
                type='month'
                id={`period-${index}`}
                value={obj.period}
                onChange={(e) => {
                  const updatedexperiences = [...this.state.experiences];
                  updatedexperiences[index].period = e.target.value;
                  this.setState({ experiences: updatedexperiences });
                  this.callBackState()
                }}
              />

              <label htmlFor={`extra-${index}`}>extra information: </label>
              <input
                id={`extra-${index}`}
                value={obj.extra}
                onChange={(e) => {
                  const updatedexperiences = [...this.state.experiences];
                  updatedexperiences[index].extra = e.target.value;
                  this.setState({ experiences: updatedexperiences });
                  this.callBackState()
                }}
              />

            </div>
          ))}
  
          
            
            <button onClick={this.addExperience}>Add job</button>
        </div>
      );
    }
  }

class ExperienceCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.props !== null) {
            return (
                <div>
                    <h1>Previous work experiences:</h1>
                    
                        {this.props.props.experiences.map((prop, index) => {
                            return (
                                <ul key={index}>
                                    <li>{prop.company}</li>
                                    <li>{prop.role}</li>
                                    <li>{prop.period}</li>
                                    <li>{prop.extra}</li>
                                </ul>
                            )
                        })}
                </div>
            )
        }
        return 
    }
}


export default Experience
export { ExperienceCV }