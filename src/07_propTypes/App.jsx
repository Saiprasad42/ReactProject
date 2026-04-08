import React from "react";
//  When Js used in React then propTypes are useful
import PropTypes from "prop-types";

class UserComponent extends React.Component{
    render(){
        return(
            <>
                <h2>PropType Demo</h2>
                <h4>Check the warning messages in the JavaScript console</h4>
                <p>Name : {this.props.name.toUpperCase()}</p>
                <p>Projects : {this.props.projects}</p>
                <p>Age : {this.props.age}</p>
            </>
        );
    }   
}
//propTypes will get automatically removed from Production build of the Application
//Used only in developmental integration testing
UserComponent.propTypes = {
    name: PropTypes.string.isRequired,
    projects: PropTypes.array,
    age(props, propName){
        if(typeof props[propName] !== "number"){
            return new Error("Age must be a number");
        }
        if(props[propName] > 100){
            return new Error("Age entered is " + props[propName] + ", it should be less than or equal to 100 ")
        }
    }
}

UserComponent.defaultprops = {
    name : "sai",
    age : 23
};

export default class App extends React.Component{
    render(){
        return(
            <UserComponent name={"Ram"} projects={["shopingcart"]} age={23}></UserComponent>
        );
    }
}