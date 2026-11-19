import React, { Component } from 'react'

import '../resources/styles/GameOver.css'

import Button from './StartButton.jsx'

import OneCookie from '../resources/images/OneCookie.png'

export default class GameOver extends Component {
    render() {
        return (
            <div className="card11">
                <h1 className="cardTitle">Congratsulation!</h1>
                <h1 className="cardTitle">You score is {this.props.score}</h1>
                <img 
                    className="cardImage" 
                    src={OneCookie} 
                    alt="AltImage"
                ></img>
                <h1 className="cardTitle">You gathered {this.props.score * 10} cookies</h1>
                <Button
                    cls="btnMenu"
                    href='/main_menu'
                    textBtn='Main Menu'
                />
            </div>
        )
    }
}
