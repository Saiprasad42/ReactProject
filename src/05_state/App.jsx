import React from "react";

//State concepts(Also, known as Controlled components used here)
export default class App extends React.Component{
    constructor(pros){
        super(pros);
        this.state = {
            empname: 'Ram',
            bManger: true
        };
    }
    handleTextInput(e){
        this.setState({ empname: e.target.value })
    }
    // wrong way - 90 cases 
  /*  
       handleCheckbox(){
        this.setState({ bManger: !this.state.bManger})
       }
  */

    // Correct way for setting state based on previous state value = Though Arrow function
    handleCheckbox(){
        this.setState((prevState) => ({
            bManger: !prevState.bManger
        }));
    }
    render(){   // render is reserved keyword...
        let role = this.state.bManger ? " Manager" : " Employee";
        return(
            <>
               <h2>State Demo</h2>
               <div>
                <label>
                    Employee Name:
                    <input type="text" onInput={(e) => this.handleTextInput(e)} defaultValue={this.state.empname}></input>
                </label>
                <label>
                    <input type="checkbox" onChange={() => this.handleCheckbox()} defaultChecked={this.state.bManger}></input>
                     Manger
                </label>
               </div>
               <p>{this.state.empname} is {role}</p>
            </>
        );
    }
}