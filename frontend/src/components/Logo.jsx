import React, { Component } from 'react'
import logo from '../resources/images/Logo.png'

import '../resources/styles/Logo.css'

export default class Logo extends Component {
    render() {
        return (
            <div>
                <img className={this.props.cls} src={logo} alt="Logo"></img>
            </div>
        )
    }
}
