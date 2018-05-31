import React, { Component } from 'react'
import TextTransformer from '../containers/TextTransformer'

export default class LowerCase extends Component {
    render() {
        return (
            <div className="LowerCase-container">
                Lowercase Container
                <TextTransformer mode="lower" />
            </div>
        )
    }
}