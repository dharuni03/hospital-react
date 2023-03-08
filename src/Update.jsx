import React, { Component } from 'react';
import axios from 'axios'
import Appointment from "./Appointment.css";
class Signup extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        id:'',
        patientname:'',
        age:'',
        gender: '',
        contactno: '',
        email:'',
        disease:''
    };
  }
  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handlePatientnameChange = (event) => {
    this.setState({ patientname: event.target.value });
  };

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleContactnoChange = (event) => {
    this.setState({ contactno: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleDiseaseChange = (event) => {
    this.setState({ disease: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
        patientname: this.state.patientname,
        age: this.state.age,
        gender: this.state.gender,
        contactno: this.state.contactno,
        email: this.state.email,
        disease: this.state.disease,
        
      };
    
      axios.put('http://127.0.0.1:8080/updateDetails', data)
  };

  render() {
    return (
      <div className='aa'>
      <h1>Book Appointment</h1>
      <form onSubmit={this.handleSubmit} className="sign-form">
      <label className="sign-label">Id:</label>
        <input
          className="dd"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />
        <label className="sign-label">Patientname:</label>
        <input
          className="dd"
          type="text"
          value={this.state.patientname}
          onChange={this.handlePatientnameChange}
        />

        <label className="sign-label">Age:</label>
        <input
          className="dd"
          type="text"
          value={this.state.age}
          onChange={this.handleAgeChange}
        />

        <label className="sign-label">Gender:</label>
        <input
          className="dd"
          type="text"
          value={this.state.gender}
          onChange={this.handleGenderChange}
        />
        <label className="login-label">Contactno:</label>
        <input
          className="dd"
          type="text"
          value={this.state.contactno}
          onChange={this.handleContactnoChange}
        />

        <label className="sign-label">Email:</label>
        <input
          className="dd"
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

<label className="sign-label">Disease:</label>
        <input
          className="dd"
          type="text"
          value={this.state.disease}
          onChange={this.handleDiseaseChange}
        />
        

          <input type="submit" />
      </form></div>
    );
  }
}

export default Signup;