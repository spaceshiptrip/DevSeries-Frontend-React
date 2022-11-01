import React, { Component } from 'react';
import Table from '../Table/DynamicTable';
import BarChart from '../BarChart/BarChart';
import BarChartVertical from '../BarChart/BarChartVertical';
import BarChartStyle from '../BarChart/BarChart.css';
import loading from './loading.gif';
import trex from './trex.jpg';
import CONFIG from '../../config.json';


function getPartialData(employees, barlabel, bardata) {
    return employees.map(function (element) {
        return { 'name': element[barlabel], 'value': element[bardata] }
    })
}

//get employee data from local server

class GetEmployeeData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: {}
        };
    }
    
   

    componentDidMount(){
        var headers = {}
        let url = CONFIG.server_local + '/getEmployees';

        fetch(url, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: headers
        })
            .then(response => response.json())
            .then(
                // handle the result
                (result) => {
                    this.setState({
                        isLoaded: true,
                        employees: result
                    });
                },

                // Handle error
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            )
    }

    getKeys = function () {
        return Object.keys(this.state.data[0]);
    }

   
    render() {
        const { error, isLoaded, employees } = this.state;

        if (error) {
            return <div>
                <img src={trex} alt="Error: Page Not Found" />
                <h3>Oops! We couldn't load the data. Sorry about that!</h3>
            </div>
        } else if (!isLoaded) {
            return <div>
                <img src={loading} alt="Loading..." /></div>
        } else {
            return (
                <div classname="GetEmployeeData">
                    <Table data={employees} />
                    <BarChartVertical style={BarChartStyle} data={getPartialData(employees, 'name', 'level of effort')} title={'Employee Effort'} />
                </div>

            );
        }

    }
}

export default GetEmployeeData