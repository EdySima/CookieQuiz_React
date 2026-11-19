import React, { Component } from 'react'

import StartButton from './StartButton.jsx'
import Logo from './Logo.jsx'

import '../resources/styles/Logo.css'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Logo cls="homePageLogo"/>
                <StartButton 
                    cls="btnHome"
                    href='/main_menu'
                    textBtn='Start'
                />
            </div>
        )
    }
}
