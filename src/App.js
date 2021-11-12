import React from 'react';
import Table from './components/Table/DynamicTable';
import GetOnlinePosts from './components/OnLinePosts/GetOnLinePosts';

import localJson from './components/LocalPosts/local.json'

export default class App extends React.Component {
    constructor(props) {
      super(props);

      // this.state = localJson;
      this.state = { jsonFile: localJson}; 
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
          </div>
          
        );
    }
}

