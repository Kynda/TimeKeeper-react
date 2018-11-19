import React, { Component } from 'react';

export default class Add extends Component {

  constructor(props) {
    super(props);

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    this.state = {date: today};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({date: event.target.date});
  }

  handleSubmit(event) {
    alert('Submitted');
    event.preventDefault();
  }

  TimeIncrementOption(increment, key) {
    return <option value={increment} key={key}>{increment}</option>
  }

  timeIncrements(props) {
    var increments = [];
    for(var h = 0; h < 24; h++) {
      for(var m = 0; m <= 45; m += 15) {
        var hour, minute;
        if (h < 10) {
          hour = '0' + h.toString();
        } else {
          hour = h.toString();
        }
        if (m < 10) {
          minute = '0' + m.toString();
        } else {
          minute = m.toString();
        }
        increments.push(hour + ':' + minute + ':00');
       }
    }
    return increments;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-xs-4">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" name="date" value={this.state.date} onChange={this.handleChange} min="2008-01-01" max="2025-12-31" />
            </div>
            <div className="form-group">
              <label htmlFor="start">Start Time</label>
              <select type="text" name="start" className="form-control">
                {this.timeIncrements().map((x, i) => this.TimeIncrementOption(x, i))}
              </select>
            </div>
            <div className="col-xs-8">
              <div className="row">
                <div className="col-xs-6">
                  <div className="form-group">
                    <label htmlFor="account">Account</label>
                    <input type="text" name="account" className="form-control" value={this.state.account} onChange={this.handleChange} />
                  </div>
                </div>
                <div className="col-xs-6">
                  <div className="form-group">
                    <label htmlFor="task">Task</label>
                    <input type="text" name="task" className="form-control" value={this.state.task} onChange={this.handleChange} />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="billable" value="1" checked={this.state.billable} onChange={this.handleChange} />Billable?
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea name="notes" className="form-control" rows="4" onChange={this.handleChange}>
                      {this.state.notes}
                    </textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4">
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
