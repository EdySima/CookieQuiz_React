import React, { Component } from 'react'
import '../resources/styles/MainMenu.css'

import Card from './MenuCard.jsx'
import Header from './Header.jsx'
import OneCookie from '../resources/images/OneCookie.png'
import ThreeCookies from '../resources/images/ThreeCookies.png'

export default class MainMenu extends Component {
    
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className = "left-column">
                        <Card 
                        title="Single Player"
                        image={OneCookie}
                        href='/quiz'
                        textBtn="Play"
                        />
                    </div>
                    <div className = "mid-column">
                        <Card 
                        title="Multi Player"
                        image={ThreeCookies}
                        href='#'
                        textBtn="Play"
                        />
                    </div>
                    <div className = "right-column">
                        <Card 
                        title="Store"
                        image={OneCookie}
                        href='#'
                        textBtn="Enter"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
