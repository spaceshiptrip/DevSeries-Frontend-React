import React from 'react';
import Table from './components/Table/DynamicTable';
import GetOnlinePosts from './components/OnLinePosts/GetOnLinePosts';

import PrettyPrintJson from './components/PrettyPrint/PrettyPrint';

import localJson from './components/LocalPosts/local.json'

export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = { jsonFile: localJson};

      // this is used to expose for testing, is the good practice?
      window.appComponent = this;

    }

    getLocalJson = function() {
      return this.state;
    }
    
    render() {
        return (
          <div className="App">
            Hello, React
            <br/> Table 1 data
            <Table data={this.state.jsonFile}/>
            
            <br/> Table 2 data
            <GetOnlinePosts/>
            <br/><br/><br/>
            <PrettyPrintJson data={this.state.jsonFile}/>
          </div>
          
        );
    }
}

