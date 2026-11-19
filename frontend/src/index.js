import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { 
  BrowserRouter as Router,
  Switch ,
  Route ,
  Redirect
} from 'react-router-dom'
import Sound from 'react-sound'
import IntroSound from './resources/sounds/Intro.mp3'

// CSS
import './index.css'

// Components
import HomePage from './components/HomePage.jsx'
import MainMenu from './components/MainMenu.jsx'
import Quiz from './components/Quiz.jsx'
ReactDOM.render(
  <React.Fragment>
    <Router>
      <Sound
          url={IntroSound}
          playStatus={Sound.status.PLAYING}
          playFromPosition={100}
      />
      <Switch>
        <Redirect exact from="/" to="/home" />
      </Switch>
      <Route exact path='/home' component = {HomePage}/>
      <Route exact path='/main_menu' component = {MainMenu}/>
      <Route exact path='/quiz' component = {Quiz}/>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
