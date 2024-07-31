import React, { Component } from 'react'
import News from './News'

export class NewsItem extends Component {
    render() {
        return (
            <div className="container">
                <News/>
            </div>
        )
    }
}

export default NewsItem
