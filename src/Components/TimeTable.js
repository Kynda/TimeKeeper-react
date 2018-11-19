import React, { Component } from 'react';
import Time from './Time.js';

export default class TimeTable extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Hours</th>
                        <th>Account</th>
                        <th>Task</th>
                        <th>Notes</th>
                        <th>Billable</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <Time />
                </tbody>
            </table>
        );
    }
}
