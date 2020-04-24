import React, { Component } from "react";
import SomeAndEvery from "./someandevery";
import Reduce from "./reduce";

class Index extends Component {
  render() {
    return (
      <div>
        <h1>ES6 Practice</h1>
        <ul>
          <SomeAndEvery />
          <Reduce />
        </ul>
      </div>
    );
  }
}

export default Index;
