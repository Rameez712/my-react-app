import React from "react";

class Subject extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"React",
            duration:"2 months",
            trainer:"Sachin",
        }
    }
    render(){
        return(
            <>
            <h1>Subject Details: {this.state.name}</h1>
            <p>Duration:{this.state.duration}</p>
            <p>Trainer:{this.state.trainer}</p>
            </>
        )
    }
}

export default Subject;