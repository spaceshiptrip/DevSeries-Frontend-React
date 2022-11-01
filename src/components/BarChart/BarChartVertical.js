// Created based on horizontal bar chart code from https://www.createwithdata.com/react-bar-chart
import { React, Component } from 'react'

function BarGroupVertical(props) {
    let barPadding = 6
    let barColour = 'darkcyan'
    let heightScale = d => d * 150
    let verticalAnchor = 80

    let height = heightScale(props.d.value)
    let xMid = props.barWidth *.85

    return <g className="bar-group">
        <text classname="name-label" y={verticalAnchor + 6} x={xMid - 15} writing-mode="vertical-rl" text-orientation="sideways-right" alignmentBaseline="middle" >{props.d.name}</text>
        <rect x={barPadding * 0.8} y={verticalAnchor - height} height={height} width={props.barWidth - barPadding} fill={barColour} />
        <text className="value-label" y={verticalAnchor + 10 - height} x={xMid} alignmentBaseline="alphabetic" >{props.d.value}</text>
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
        let barWidth = 40

        let barGroups = this.state.data.map((d, i) => <g transform={`translate(${i * barWidth}, 0)`}>
            <BarGroupVertical d={d} barWidth={barWidth} />
        </g>)

        return <svg width="800" height="500" >
            <g className="container">
                <text text-align="top" className="title" x="0" y="40">{this.props.title}</text>
                <g className="chart" transform="translate(10, 130)">
                    {barGroups}
                </g>
            </g>
        </svg>
    }

}
