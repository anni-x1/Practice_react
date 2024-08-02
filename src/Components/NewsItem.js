import React, { Component } from 'react'
import News from './News'
import $ from 'jquery';

export class NewsItem extends Component {
    render() {
        function handleClick() {
            let search = $('textarea').val();
            console.log(search);
        }
        return (
            <div className="container">
                <h1>NewsX - Top Headlines</h1>
                <div >
                    <textarea className="text-centre "></textarea>
                    <button className='btn btn-primary' onClick={handleClick}>Search</button>
                </div>
                
                {/* <News searchD={search}/> */}
                <News/>
                <h2>{this.search}</h2>
            </div>
        )
    }
}

export default NewsItem
