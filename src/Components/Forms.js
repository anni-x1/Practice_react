import React from "react";

export default class Forms extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            email:"",
        }
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit = (event)=>{
        // alert(`Name: ${this.state.name} Email: ${this.state.email}`);
        event.preventDefault();
        alert(`Name: ${this.state.name} Email: ${this.state.email}`);
      
    }
    render(){
        return(
                <form className="form" action="/" onSubmit={this.handleSubmit}>
                <div className="name">
                    <label htmlFor="name">Name:</label>
                    <input type="text" onChange={this.handleChange} name="name"/>
                </div>
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={this.handleChange} name="email"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}