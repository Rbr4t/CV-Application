import React, { Component } from 'react';
import '../styles/General.css'

class Education extends Component {
    constructor() {
      super();
  
      this.state = {
        schools: [{institution: '', type: '', period: ''}],
        newEducation: {institution: '', type: '', period: ''}, // Add a new state variable to track the input value
      };
  
      this.addEducation = this.addEducation.bind(this);
    }

    callBackState(){
        this.props.callBackState(this.state);
    }

    addEducation(e) {
      e.preventDefault();
      const newEducationArray = [...this.state.schools, {institution: this.state.newEducation.institution, type: this.state.newEducation.type, period: this.state.newEducation.period}]
      this.setState({schools: newEducationArray, newEducation:  {institution: '', type: '', period: ''}})
      console.log(this.state)
      this.callBackState()
    }
    
    render() {
      return (
        <div>
          {this.state.schools.map((obj, index) => (

            <div key={index}>
              <label htmlFor={`institution-${index}`}>School/University: </label>
              <input
                id={`institution-${index}`}
                value={obj.institution}
                onChange={ (e) => {
                  const updatedschools = [...this.state.schools];
                  updatedschools[index].institution = e.target.value;
                  this.setState({ schools: updatedschools });
                  this.callBackState()
                }}
              />

              <label htmlFor={`type-${index}`}>Type of education: </label>
              <input
                id={`type-${index}`}
                value={obj.type}
                onChange={(e) => {
                  const updatedschools = [...this.state.schools];
                  updatedschools[index].type = e.target.value;
                  this.setState({ schools: updatedschools });
                  this.callBackState()
                }}
              />

              <label htmlFor={`period-${index}`}>Time of graduation: </label>
              <input
                type='month'
                id={`period-${index}`}
                value={obj.period}
                onChange={(e) => {
                  const updatedschools = [...this.state.schools];
                  updatedschools[index].period = e.target.value;
                  this.setState({ schools: updatedschools });
                  this.callBackState()
                }}
              />

            </div>
          ))}
  
          
            
            <button onClick={this.addEducation}>Add education</button>
        </div>
      );
    }
  }

class EducationCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.props !== null) {
            return (
                <div>
                    <h1>Education:</h1>
                    
                        {this.props.props.schools.map((prop, index) => {
                            return (
                                <ul key={index}>
                                    <li>{prop.institution}</li>
                                    <li>{prop.type}</li>
                                    <li>{prop.period}</li>
                                </ul>
                            )
                        })}
                </div>
            )
        }
        return 
    }
}


export default Education
export { EducationCV }