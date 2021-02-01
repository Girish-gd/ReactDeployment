
import React from "react";
import ReactDOM from "react-dom";


class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            address:''
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);


    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        alert(`${this.state.firstname} ${this.state.lastname} ${this.state.address}`)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <input name="firstname" onChange={this.handleChange}/>
                <input name="lastname" onChange={this.handleChange}/> 
                <input name="address" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        );
    }
}


export default Form;