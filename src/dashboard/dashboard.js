import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


function Dashboard () {
 return <div class="d-sm-flex align-items-center justify-content-between mb-4">
 <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
 <Link to="/reports">
 <a  class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
         class="fas fa-download fa-sm text-white-50"></i> Generate Report</a></Link>
</div>

}
export default Dashboard