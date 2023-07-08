import { Component } from 'react';
// import '../styles/General.css';
import '../styles/Panel.css';
import logo from '../styles/default.jpg'

class GeneralInfo extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            profilePic: '' || logo
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
            this.setState({
                ...this.state,
                profilePic: reader.result
            }, () => this.callBackState())
        })

        reader.addEventListener('error', () => {
            this.setState({
                ...this.state,
                profilePic: logo
            }, () => this.callBackState())
        })

        reader.readAsDataURL(e.target.files[0]);
        
    }

    render() {
        return (
            
                <div className='basic-info panel-input'>
                    <label htmlFor='name'>Full name: </label>
                    <input id='name' value={this.state.name} onChange={this.changeName}></input>
      
                    <label className='profilepicker' htmlFor="profilepic">Select profile:</label>
                    <input type="file" accept="image/*" onChange={this.changeProfilePic} id="profilepic" name="profile"></input>
                    
                    <label htmlFor='email'>Email: </label>
                    <input type='email' id='email' value={this.state.email} onChange={this.changeEmail}></input>

                    <label htmlFor='phone'>Phone number: </label>
                    <input type='tel' id='phone' value={this.state.phone} onChange={this.changePhone}></input>

                    <label htmlFor='address'>Address: </label>
                    <input type='text' id='address' value={this.state.address} onChange={this.changeAddress}></input>
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
                    <div className='profilepanel'>
                        <h1>{this.props.props.name}</h1>
                        <img src={this.props.props.profilePic} alt='preview'></img>
                    </div>
                    <div className='secondarypanel'>
                        <p>Email: {this.props.props.email}</p>
                        <p>Phone: {this.props.props.phone}</p>
                        <p>Address: {this.props.props.address}</p>
                    </div>
                    
                    
                </div>
            )
        }

        return (
            <div className='panel'>
                <div className='profilepanel'>
                    <h1>Full name</h1>
                    <img src={logo} alt='preview'></img>
                </div>
                <div className='secondarypanel'>
                    <p>Email: </p>
                    <p>Phone: </p>
                    <p>Address: </p>
                </div>
                
                
            </div>
        )
        
    
        
    }    
}


export { GeneralCV, GeneralInfo }