import React from "react";
import {Provider} from 'react-redux';
import duxStore from './ducks/store'

import "./App.css";

import List from "./components/List/List";
import Form from "./components/Form/Form";

function App(props) {
  return (
    <Provider store={duxStore}>
      <div className="App">
        <List />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
