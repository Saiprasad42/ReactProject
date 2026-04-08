import React from "react";

class WelcomeComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome to React!</h1>
            </div>
        );
    }
}

export default class App extends React.Component{
    render(){
        return(
            <>
            <WelcomeComponent />                
            <WelcomeComponent />
            </>
        );
    }
}