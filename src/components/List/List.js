import React from "react";
import {connect} from 'react-redux';
import {removeItem} from './../../ducks/reducer';

import trash from "./../../assets/waste_bin_red.svg";
import "./List.css";

function List(props) {
  console.log('List props', props.list)
  // let tempList = [];
  let list = props.list.map((item, i) => {
    return (
      <div className="list_item" key={item}>
        <img src={trash} alt="delete" onClick={_ => props.remove(i)} />
        <p>{item}</p>
      </div>
    );
  });
  return (
    <div className="View List">
      <h1>List</h1>
      <div className="list_box">
      {list}
      </div>
    </div>
  );
}

function mapStateToProps(duxState)
{
  return {
    list: duxState.list
  }
}
const dispatchToState = { remove: removeItem};

const connectedComponent = connect(mapStateToProps, dispatchToState)(List);
export default connectedComponent;
