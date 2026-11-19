import React, { Component } from 'react'

import '../resources/styles/StartButton.css'

export default class StartButton extends Component {
    render() {
        return (
            <a href={this.props.href}>
                <button className={this.props.cls}>
                    {this.props.textBtn}
                </button>
            </a>
        )
    }
}

