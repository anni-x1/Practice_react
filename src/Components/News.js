import React, { Component } from 'react'

export class News extends Component {
    constructor() {
        super();
        // const searchDq = this.props;
        // console.log(searchDq);
        this.state = {
            searchx: [{"x":"searchD"},{"sdsdsd": "sdsdsd"}],
            // articles: [],
            articles: [
                {
                    "source": {
                        "id": "wired",
                        "name": "Wired"
                    },
                    "author": "Jessica Klein",
                    "title": "Bitcoin Bros Go Wild for Donald Trump",
                    "description": "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
                    "url": "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
                    "urlToImage": "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
                    "publishedAt": "2024-07-28T12:43:07Z",
                    "content": "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]"
                },
                {
                    "source": {
                        "id": "wired",
                        "name": "Wired"
                    },
                    "author": "Joel Khalili",
                    "title": "Craig Wright Faces Perjury Investigation Over Claims He Created Bitcoin",
                    "description": "By order of a UK judge, Craig Wright can no longer claim he is the creator of bitcoin and now faces the prospect of criminal charges.",
                    "url": "https://www.wired.com/story/craig-wright-perjury-bitcoin-trial/",
                    "urlToImage": "https://media.wired.com/photos/6696630a5d2d61e4805c3175/191:100/w_1280,c_limit/GettyImages-1979197796.jpg",
                    "publishedAt": "2024-07-16T12:58:12Z",
                    "content": "A judge in the UK High Court has directed prosecutors to consider bringing criminal charges against computer scientist Craig Wright, after ruling that he lied extensively and repeatedly and committed… [+2851 chars]"
                },
                {
                    "source": {
                        "id": "wired",
                        "name": "Wired"
                    },
                    "author": "Joel Khalili",
                    "title": "A Tiny Texas Village Is About To Annex a Gigantic Bitcoin Mine",
                    "description": "In a roundabout bid to win public opinion (and a juicy tax abatement,) Riot Platforms is preparing for its prized bitcoin mine to be annexed by a miniscule village in rural Texas.",
                    "url": "https://www.wired.com/story/a-tiny-texas-hamlet-is-about-to-annex-an-industrial-scale-bitcoin-mine/",
                    "urlToImage": "https://media.wired.com/photos/66958525a54303f24cdd6052/191:100/w_1280,c_limit/Texas-Annex-Bitcoin-Business-1288216977.jpg",
                    "publishedAt": "2024-07-16T11:30:00Z",
                    "content": "In Oak Valley, a sleepy village in rural Navarro County, Texas, there is very little of anything. A potholed track runs through its two square miles of sun-beaten grassland, past a modest prefab comm… [+3234 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Harri Weber",
                    "title": "Trump Promises to Make U.S. the ‘Crypto Capital of the Planet and the Bitcoin Superpower’",
                    "description": "The former president drew cheers at the 2024 Bitcoin Conference after saying he'll \"fire\" Biden-nominated SEC Chair Gary Gensler.",
                    "url": "https://gizmodo.com/trump-promises-to-make-u-s-the-crypto-capital-of-the-planet-and-the-bitcoin-superpower-2000480037",
                    "urlToImage": "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-27-at-1.02.37 PM.jpg",
                    "publishedAt": "2024-07-27T20:59:48Z",
                    "content": "Speaking to a crowd of supporters at the Bitcoin 2024 Conference in Nashville, Tennessee, former president and Republican nominee Donald Trump said he would make the U.S. the “crypto capital of the p… [+2326 chars]"
                },
                {
                    "source": {
                        "id": "wired",
                        "name": "Wired"
                    },
                    "author": "Makena Kelly",
                    "title": "Silicon Valley Hasn’t Embraced Trump. But It’s Wavering on Biden",
                    "description": "Venture capitalists on both sides of the aisle suggest Silicon Valley is more anti-Biden than it is pro-Trump.",
                    "url": "https://www.wired.com/story/silicon-valley-crypto-trump-biden-debate/",
                    "urlToImage": "https://media.wired.com/photos/668d715c9004df7e67a59acd/191:100/w_1280,c_limit/Silicon-Valley-Trump-Biden-Politics.jpg",
                    "publishedAt": "2024-07-11T09:30:00Z",
                    "content": "The June fundraiser set off alarm bells suggesting that a new political movement needed to be accounted for, but little in the records of its organizers suggests deep fealty to MAGA doctrine. Palihap… [+3700 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Slashdot.org"
                    },
                    "author": "Slashdot Staff",
                    "title": "RFK Jr. Says He'd Direct the Government to Buy $615 Billion in Bitcoin or 4 Million Bitcoins",
                    "description": "US presidential candidate, Robert F. Kennedy Jr., announced during his keynote Friday at the Bitcoin Conference that he would direct the US government to buy Bitcoin until the size of its Bitcoin reserves matched its gold reserves. At current prices, that equ…",
                    "url": "https://news.slashdot.org/story/24/07/26/239214/rfk-jr-says-hed-direct-the-government-to-buy-615-billion-in-bitcoin-or-4-million-bitcoins",
                    "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
                    "publishedAt": "2024-07-26T23:03:00Z",
                    "content": "... a position of dominance that no other country will be able to usurp.\r\nWhy and who cares? Trading money for a different kind of money give us \"dominance\"? What part of your brain did that worm eat… [+237 chars]"
                }
            ]
        }
    }
    // async componentDidMount() {

    //     // let url = `https://newsapi.org/v2/everything?q=${this.props.searchD}&from=2024-07-31&sortBy=popularity&apiKey=YOUR_API_KEY`;
    //     let url = `https://newsapi.org/v2/everything?q=Marvel&from=2024-07-31&sortBy=popularity&apiKey=YOUR_API_KEY`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData.articles);
    //     this.setState({ 
    //         articles: parsedData.articles 
    //     })

    // }
    render() {
        return (
            <>
                <div className='row'>
                    {
                        // this.state.searchx.map((element) => {
                        //     return <div>
                        //         <p>{element.x}</p>
                        //         </div>
                        // })
                    }
                    {
                        this.state.articles.map((element) => {
                            return <div className="col-md-3 mx-3 my-3">
                                <div key={element.title} className="card" style={{ width: "19 rem" }}>
                                    <img src={element.urlToImage} className="card-img-top" alt="xxx" />
                                    <div className="card-body">
                                        <strong><h4 className="card-title">{element.title}...</h4></strong>
                                        <p className="card-text" style={{ color: "#a1a1a1" }}>{element.description}...</p>
                                        <a href={element.url} target='_blank' rel="noreferrer" className="btn btn-primary">Read More on this Article</a>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </>
        )
    }
}

export default News
