//sendDataSomewhere https://stackoverflow.com/questions/45941684/save-submitted-form-values-in-a-json-file-using-react
//
import React, {useState} from "react";
import { Form, Input, Button, Select } from "antd";
//import styled from "styled-components";
//import { useHistory } from "react-router-dom";
import {UserOutlined} from "@ant-design/icons";
import jsonfile from'jsonfile';

const fs = require('fs');
const file = new File([""], "filename");

const { TextArea } = Input;

var datain = {}

class UserInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.sendDataSomewhere = this.sendDataSomewhere.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A category was added: ' + this.state.value);
      event.preventDefault();
    }
    
    sendDataSomewhere = function jsonfile(file) {
      let dataTest = JSON.stringify(datain)
      fs.writeFile(file, dataTest, function (err) {
        console.error(err);
      });
    };

    render() {
      return (
        <form onSubmit={this.sendDataSomewhere(file)}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="school">School</option>
              <option value="work">Work</option>
              <option value="social">Social</option>
              <option value="exercise">Exercise</option>
            </select>
          </label>
          <br />
          <label>
            Activity:
            <input
              name="activity"
              type="string"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Hours per Week:
            <input
              name="hours"
              type="number"
              value={this.state.hours}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default UserInput;