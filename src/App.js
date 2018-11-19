import React, { Component } from 'react';
import Filters from './Components/Filters.js';
import Totals from './Components/Totals.js';
import Add from './Components/Add.js';
import TimeTable from './Components/TimeTable.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="hidden-xs col-sm-12 col-md5">
                    <h1>Hello, { this.props.username }</h1>
                    <Totals
                        totalHours={ this.props.totalHours }
                        billableHours={ this.props.billableHours }
                        possibleHours={ this.props.possibleHours }
                    />
                </div>
                <div className="col-xs-12 col-md-7">
                    <Filters />
                    <Add />
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <TimeTable />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
