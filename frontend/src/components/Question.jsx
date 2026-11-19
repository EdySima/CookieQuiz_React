import React, { Component } from 'react'

import '../resources/styles/Question.css'

export default class Question extends Component {
    render() {
        return (
            <div className="mainDiv">
                <div className="thirdCard">
                </div>
                <div className="secondCard">
                </div>
                <div className="frontCard">
		    <div>
                        <label for="QuizNo">{this.props.QuizNo}/10</label>
                        <progress id="QuizNo" value={this.props.QuizNo} max="10"></progress>
		    </div>
		    <div className="questionBody">
                        <h1 className="questionText" dangerouslySetInnerHTML={{__html: this.props.question}}></h1>
		        {this.props.imageUrl && (
                            <img className="questionImage" src={this.props.imageUrl} alt={this.props.question} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
