import React, { Component } from 'react';
import '../styles/General.css'


export default class Skills extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='skill'>
                <label htmlFor='skill'>Skill: </label>
                <input id='skill' type='text'></input>
            </div>
        )
    }
}