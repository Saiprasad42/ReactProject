import React from 'react'
import EmployeeForm from './components/EmployeeForm'

// const App = () => <EmployeeForm/>

//export default App

// Container Component => Updates the model
export default class App extends React.Component {
    handleFormSubmit(values) {
        console.log("handleSubmit from App component");
        console.log(values);
    }

    render() {
        return (
        <EmployeeForm onSubmit={(values) => this.handleFormSubmit(values)}/>
        );
    }
}