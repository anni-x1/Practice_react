import React from "react";

export default class Logger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logg: "dd",
        }
    }
    handleInputChange = (event)=>{
        this.setState({
            logg:event.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.logg}</h2>
                <textarea name="TA" onChange={this.handleInputChange}></textarea>
            </div>
        )
    }
}