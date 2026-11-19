import React, { Component } from 'react'

import '../resources/styles/Header.css'

import Logo from './Logo.jsx';
import OneCookie from '../resources/images/OneCookie.png'
import OptionsIcn from '../resources/images/Options.png'
export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="left-column">
                    <button className="CookieButton"
                            onClick={this.handleClick} 
                            onMouseDown={this.handleMosueDown} 
                            onMouseUp={this.handleMosueUp}>
                            <img className="CookieImgBtn" src={OneCookie} alt="OneCookie"></img>
                            <h1 className="CookieAmount">300</h1>
                    </button>
                </div>
                <div className="mid-column">
                    <Logo cls='headerLogo'/>
                </div>
                <div className="right-column">
                    <button className="OptionsButton"
                            onClick={this.handleClick} 
                            onMouseDown={this.handleMosueDown} 
                            onMouseUp={this.handleMosueUp}>
                            <h1 className="OptionsText">Options</h1>
                            <img className="OptionsImgBtn" src={OptionsIcn} alt="OneCookie"></img>
                            
                    </button> 
                </div>
            </div>
        )
    }
}
