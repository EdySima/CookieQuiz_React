import React, { Component } from 'react'

export default class Answer extends Component {
    render() {
        return (
            <button onClick = {this.props.onClick} className={this.props.cls} dangerouslySetInnerHTML={{__html: this.props.answer}}></button>
        )
    }
}
