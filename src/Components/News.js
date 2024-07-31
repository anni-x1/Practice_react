import React, { Component } from 'react'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=Deadpool&from=2024-07-30&sortBy=popularity&apiKey=26cf3063ed3f4c30a6cfe3684300c30f";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
        
    }
    render() {
        return (
            <div className='row'>
                {
                    this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-3 mx-3 my-3">
                            <div className="card" style={{width: "19 rem" }}>
                                <img src={element.urlToImage} className="card-img-top" alt="xxx" />
                                <div className="card-body">
                                    <strong><h4 className="card-title">{element.title.slice(0,35)}...</h4></strong>
                                    <p className="card-text" style={{ color: "#a1a1a1" }}>{element.description.slice(0,95)}...</p>
                                    <a href={element.url} target='_blank' rel="noreferrer" className="btn btn-primary">Read More on this Article</a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default News
