// Modified from https://www.createwithdata.com/react-bar-chart
import { React, Component } from 'react'

function BarGroup(props) {
    let barPadding = 6
    let barColour = 'darkcyan'
    let widthScale = d => d * 150

    let width = widthScale(props.d.value)
    let yMid = props.barHeight * 0.7

    return <g className="bar-group">
        <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
        <rect y={barPadding * 0.8} width={width} height={props.barHeight - barPadding} fill={barColour} />
        <text className="value-label" x={width - 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
}


export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = { data: props.data }
    }

    getKeys = function () {
        return Object.keys(this.state.data[0]);
    }


 
    render() {
        let barHeight = 30

        let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
            <BarGroup d={d} barHeight={barHeight} />
        </g>)

        return <svg width="800" height="300" >
            <g className="container">
                <text text-align="left" className="title" x="0" y="40">{this.props.title}</text>
                <g border="1px solid black" className="chart" transform="translate(130,60)">
                    {barGroups}
                </g>
            </g>
        </svg>
    }

}