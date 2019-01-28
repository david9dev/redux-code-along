import React, { Component } from "react";
import {addItem} from './../../ducks/reducer';
import {connect} from 'react-redux';

import "./Form.css";
import plus from "./../../assets/add_red.svg";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleInput(val) {
    this.setState({
      name: val
    })
  }

  render() {
    return (
      <div className="View Form">
        <h1>Add</h1>
        <div className="input_box">
          <input
            value={this.state.name}
            onChange={e => this.handleInput(e.target.value)}
          />
          <img src={plus} alt="add" onClick={() => this.props.add(this.state.name)} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(duxState)
{
  return({name: duxState.name})
}
const mapDispatchToProps = {
  add: addItem
}
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Form);

export default connectedComponent;
