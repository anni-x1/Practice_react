import React from "react";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    handleOnClick = (increment) => {
        this.setState({ counter: this.state.counter + increment })
    }
    render() {
        return (
            <>
                <h2>{this.state.counter}</h2>
                <button className='btn btn-secondary ' onClick={() => { this.handleOnClick(1) }}>increment by 1</button>
                <button className='btn btn-secondary mx-3' onClick={() => { this.handleOnClick(5) }}>increment by 5</button>
                <button className='btn btn-secondary' onClick={() => { this.handleOnClick(-10) }}>decrement by 10</button>
            </>
        )
    }
}
export default Events