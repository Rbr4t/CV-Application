import React, { Component } from 'react';
import '../styles/General.css'

export default class GeneralInfo extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h2>Personal information</h2>
                <div className='basic-info'>
                    <label htmlFor='name'>Full name: </label>
                    <input id='name'></input>

                    <label htmlFor='email'>Email: </label>
                    <input type='email' id='email'></input>

                    <label htmlFor='phone'>Phone number: </label>
                    <input type='tel' id='phone'></input>

                    <label htmlFor='address'>Address: </label>
                    <input type='text' id='address'></input>
                </div>
            </div>
            
        )
    }
}