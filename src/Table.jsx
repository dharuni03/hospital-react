import axios from "axios";
import React, { Component } from "react";
import Table from "./Table.css";
class Details extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>Patientname</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Contactno</th>
          <th>Email</th>
          <th>Disease</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.contactno}>
            <td>{user.patientname}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.contactno}</td>
            <td>{user.email}</td>
            <td>{user.disease}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Details;