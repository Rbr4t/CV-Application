import { Component } from 'react';
import '../styles/General.css';
import '../styles/Panel.css';

class GeneralInfo extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            profilePic: ''
        };
      
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeProfilePic = this.changeProfilePic.bind(this);
    }

    callBackState(){
        console.log(this.state)
        this.props.callBackState(this.state);
      }

    changeName(e) {
        e.preventDefault();
        this.setState({
          ...this.state,
          name: e.target.value
        }, () => this.callBackState());
        
    }
    
    changeEmail(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            email: e.target.value,
        }, () => this.callBackState());
    }

    changePhone(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            phone: e.target.value,
        }, () => this.callBackState());
    }

    changeAddress(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            address: e.target.value,
        }, () => this.callBackState());
    }

    changeProfilePic(e) {
        e.preventDefault();
        console.log(e.target)
        let reader = new FileReader()

        reader.addEventListener('loadend',() => {
            console.log(reader.result)
            this.setState({
                ...this.state,
                profilePic: reader.result
            }, () => this.callBackState())
        })

        reader.readAsDataURL(e.target.files[0]);
        
    }

    render() {
        return (
            <div>
                <div className='basic-info'>
                    <label htmlFor='name'>Full name: </label>
                    <input id='name' value={this.state.name} onChange={this.changeName}></input>
      
                    <label htmlFor="profilepic">Profile picture:</label>
                    <input  type="file" accept="image/*" onChange={this.changeProfilePic} id="profilepic" name="profile"></input>

                    <label htmlFor='email'>Email: </label>
                    <input type='email' id='email' value={this.state.email} onChange={this.changeEmail}></input>

                    <label htmlFor='phone'>Phone number: </label>
                    <input type='tel' id='phone' value={this.state.phone} onChange={this.changePhone}></input>

                    <label htmlFor='address'>Address: </label>
                    <input type='text' id='address' value={this.state.address} onChange={this.changeAddress}></input>
                </div>
                
            </div>
            
        )
    }
}

class GeneralCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        if(this.props.props !== null) {
            return (
                <div className='panel'>
                    
                    <h1>{this.props.props.name}</h1>
                    <img src={this.props.props.profilePic} alt='preview'></img>
                    <h1>{this.props.props.email}</h1>
                    <h1>{this.props.props.phone}</h1>
                    <h1>{this.props.props.address}</h1>
                </div>
                )
        }
        
    
        
    }    
}


export { GeneralCV, GeneralInfo }