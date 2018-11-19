import React, { Component } from 'react';


export default class Totals extends Component {
    render() {
        return (
            <ul className="list-inline">
                <li><strong>Total Hours:</strong>&nbsp;
                    { this.props.totalHours }/{ this.props.possibleHours }&nbsp;
                    ({ this.props.totalHours / this.props.possibleHours * 100 }%)
                </li>
                <li><strong>Billable Hours:</strong>&nbsp;
                    { this.props.billableHours }&nbsp;
                    ({ this.props.billableHours / this.props.possibleHours * 100 }%)
                </li>
                <li><strong>Non-Billable Hours:</strong>&nbsp;
                    { this.props.totalHours - this.props.billableHours }&nbsp;
                    ({ (this.props.totalHours - this.props.billableHours) / this.props.possibleHours * 100 }%)</li>
            </ul>
        );
    }
}


