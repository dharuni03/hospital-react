import React from 'react'
import Login from "./Login.jsx"
import Appointment from "./Appointment.jsx";
import Table from "./Table.jsx";
import Dashboard from "./Dashboard.jsx";
import Delete from "./Delete.jsx";
import Update from "./Update.jsx";


import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='' element ={<Login/>}></Route>
        <Route path='Appointment' element ={<Appointment/>}></Route>
        <Route path='Table' element ={<Table/>}></Route>
        <Route path='Dashboard' element ={<Dashboard/>}></Route>
        <Route path='Delete' element ={<Delete/>}></Route>
        <Route path='Update' element ={<Update/>}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App