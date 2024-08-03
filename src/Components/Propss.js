import React from "react";

export default class Propss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.usrname,
            age:  (this.props.age),
        }
    }
    increment = () => {
        this.setState({ age: this.state.age + 1 })
    }
    render() {
        return (
            <>
                <h2>Hey {this.state.name} {this.state.age}!</h2>
                <button className="btn btn-primary" onClick={this.increment}>Increment</button>
            </>
        )
    }
}