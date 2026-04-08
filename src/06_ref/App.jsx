import React from "react";

//ref concept(uncontrolled components) ===> ref is a react specific keyword ..
export default class App extends React.Component{
    constructor(pros){
        super(pros);
        this.refName = React.createRef();
       // this.refAge = React.createRef();
    }
    retrieve(){
        let name = this.refName.current.value;
        alert("Retrieved name from text box: " + name);
        this.refName.current.focus();
       /* let age = this.refAge.current.value;
        alert("Retrieved age from text box: " + age);
        this.refAge.current.focus();  */
    }
    render(){
        return(
            <>                         
            <h2>Ref Demo</h2>
            <label>Enter your Name:
                <input type="text" ref={this.refName} /><br /><br />
                <button onClick={() => this.retrieve()}>Retrieve name and display</button>
            </label>
            </>
        );
    }
}