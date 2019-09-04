import React, { Component } from 'react';

const Done = (props) => {
    return (
        <div>
          <p className="item-1">I would do anything for love but I won't do <strong style={{color: 'red',}}>{props.thing}</strong>!!!</p>
        </div>
        
    )
}

const Former = (props) => {
    return (
        <div style={{marginTop: '3vh',marginLeft: '3vw',}}>          

        <form onSubmit={props.onsubmit}>

          <label>
            I would do anything for love, but I won't do:
            <span style={{marginLeft: '2%',marginRight: '2%',}}>
            <select value={props.value} onChange={props.onchange}>
              <option value="your taxes">your taxes</option>
              <option value="formal dance">formal dance</option>            
              <option value="an open relationship">an open relationship</option>
              <option value="the forbidden arts">the forbidden arts</option>
              <option value="a Ph.D.">a Ph.D.</option>
              <option value="a prenup">a prenup</option>
              <option value="social media">social media</option>                                          
              <option value="my share of the housework">my share of the housework</option>                        
        </select>
        </span>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
 
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
            <>{this.state.submitted ?
                  <Done thing={this.state.value}/> :
                  <Former onsubmit={this.handleSubmit} onchange={this.handleChange} value={this.state.value}/>
                 }
            </>
      );
  }
}


export default SelectForm;
