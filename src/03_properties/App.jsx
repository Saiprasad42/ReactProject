import React from "react";

//Class way, Stateful Component [<= React 16.7]
/*class OSComponent extends React.Component{
    render(){
        return(
            <>
              <h1>Operating System: {this.props.os}</h1>    
              <h3>Devloped by {this.props.children}</h3>       
            </>

        );
    }
}
*/
export default class App extends React.Component{
    render(){
        return(
            <>
              <OSComponent os="Windows">Microsoft</OSComponent>
              <OSComponent os="Solaris">Sun Microsystem</OSComponent>
              <OSComponent os="iOS">Apple</OSComponent>
            </>
        );
    }
}

//Newer ES2015 = Arrow function
//Function Component [<= React 16.7 -> Stateless Component: Before Functional Component can't manged] 
//[From 16.8, State through React Hookes : Functional Component can also manged nowdays]
//ES5 way of writing JS function
function OSComponent(props){
    return(
        <>
            <h1>Operating System (func): {props.os}</h1>    
            <h3>Devloped by {props.children}</h3> 
        </>
    );
}
//ES6 OR ES2015 way of writing JS function(arrow func) -> syntactic sugar
/*const OSComponent = props =>     //Destructuring ES2015
    (
        <>
            <h1>Operating System (arrow func): {props.os}</h1>    
            <h3>Devloped by {props.children}</h3> 
        </>
    )
    */
