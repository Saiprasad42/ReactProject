import React from "react";

export default class App extends React.Component{
    add(){
        alert('Add clicked');
    }
    edit(){
        alert('Edit clicked');
    }
    delete(){
        alert('Delete clicked');
    }
    render(){
        return(
            <>
              <h2>Event Demo</h2>
              <button onClick={() => this.add()}>Add</button>
              <button onClick={() => this.edit()}>Edit</button>
              <button onClick={() => this.delete()}>Delete</button>
            </>
        );
    }
}