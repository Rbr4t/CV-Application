import { Component } from "react";
import logo from '../styles/github-mark.png'

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <nav>
                <h1>CV Creator</h1>

                <a href="https://github.com/Rbr4t/CV-Application" target="_blank"><img style={{height: 50}} src={logo} alt="github link"></img></a>
            </nav>
        )
    }
}

export default Navbar