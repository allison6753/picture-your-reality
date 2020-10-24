import React from 'react';

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A category was added: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
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

function Input(){
    return(
        <div>
            
        </div>
    )
}

export default Input;