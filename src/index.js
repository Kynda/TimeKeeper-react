import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App username="Joe" totalHours="30" possibleHours="40" billableHours="20" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// TimeKeeper API
// get /accounts
// get /tasks
// get /filter/start[/:start]/end[/:end]/accounts[/:accounts]/tasks[/:tasks]/billable[/:billable]
// post /time {account,date,end,hours,notes,start,task}
// put /time[/:id] {account,date,end,hours,notes,start,task}
// delete /time[/:id]
