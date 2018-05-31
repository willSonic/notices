import React, { Component } from 'react'
import TextTransformer from '../containers/TextTransformer'

export default class UpperCase extends Component {
    render() {
        return (
            <div className="UpperCase-container">
                <h2>Let's UPPERCASE some stuff</h2>
                <TextTransformer mode="upper" />
            </div>
        )
    }
}