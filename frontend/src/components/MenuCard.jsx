import React, { Component } from 'react'

import '../resources/styles/MenuCard.css'
import Button from './StartButton.jsx'

export default class MenuCard extends Component {
    render() {
        return (
            <div className="card">
                <h1 className="cardTitle">{this.props.title}</h1>
                <img className="cardImage" src={this.props.image} alt="AltImage"></img>
                <Button
                    cls="btnMenu"
                    href={this.props.href}
                    textBtn={this.props.textBtn}
                />
            </div>
        )
    }
}
