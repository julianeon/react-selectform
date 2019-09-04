import React, { Component } from 'react';

const Done = (props) => {
    return (
        <div><p>I would do anything for love but I won't do {props.thing}!!!</p></div>
    )
}


class SelectForm extends Component {
  constructor(props) {
      super(props);
      this.state = {value: 'your taxes', submitted: false};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({submitted: true})
//    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

    render() {
        return (
            <div>{this.state.submitted ?
                  <Done thing={this.state.value}/> :
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      I would do anything for love, but I won't do:
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="your taxes">your taxes</option>
                        <option value="formal dance">formal dance</option>            
                        <option value="an open relationship">an open relationship</option>
                        <option value="genital stuff">genital stuff</option>
                        <option value="butt stuff">butt stuff</option>
                        <option value="the forbidden arts">the forbidden arts</option>
                        <option value="an equal share of the housework">an equal share of the housework</option>                        
                      </select>
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                 }
            </div>
      );
  }
}


export default SelectForm;
