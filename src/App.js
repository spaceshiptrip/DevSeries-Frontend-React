import React from 'react';
import GetEmployeeData from './components/EmployeeData/GetEmployeeData';
import localJson from './components/LocalPosts/local.json';


export default class App extends React.Component {
    constructor(props){
      super(props);

      this.state = localJson;
    }

    componentDidMount() {
        document.title = "Employee Info";
    }
    render() {
        
        
        return (
           
            <div classname="app">
                <h1> Employee Information and Performance Metrics</h1>
            <br/><h2> Employee Information Table </h2>
            <GetEmployeeData/>
            </div>
          
        );
    }
    
   
}
