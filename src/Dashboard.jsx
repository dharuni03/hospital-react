import React from 'react'
import './Dashboard.css'
import Appointment from "./Appointment.jsx";
import Table from "./Table.jsx";
import Delete from "./Delete.jsx";


import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className='bl'>
        <div class="box info">
        <a><Link to="/Appointment">
  <p>Book Appointment</p></Link></a>
</div>

        <div class="box warn">
        <Link to="/Table">
  <p>Details</p></Link>
</div>

<div class="box era">
        <Link to="/Update">
  <p>Update Details</p></Link>
</div>

<div class="box app">
        <Link to="/Delete">
  <p>Delete Details</p></Link>
</div>
 

    </div>
  )
}

export default Dashboard;