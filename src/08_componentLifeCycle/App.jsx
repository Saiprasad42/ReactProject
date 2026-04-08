import React from "react";
import './App.css'

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Ram"
        };
        console.log("constructor called") ;
    }
    UNSAFE_componentWillMount(){   //This is DEPRECATED and  should not be used anymore.
        console.log("component will mount - DEPRECATED, should not be used")
    }
    componentDidMount(){          // Getting Data from backend server - do it here
        console.log("component did mount")
    }
}