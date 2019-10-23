import React from "react";

class Sample extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   var now = new Date();
    //   var Sec = now.getSeconds();
    //   console.log(Sec);
    // }, 1000);
    // setTimeout(() => {
    //   var now = new Date();
    //   var Sec = now.getSeconds();
    //   console.log(Sec);
    // }, 2000);
    function first(callback, callback2) {
      var now = new Date();
      var Sec = now.getMilliseconds();
      console.log(Sec);
      callback(callback2);
    }
    function second(callback2) {
      var now = new Date();
      var Sec = now.getMilliseconds();
      console.log(Sec);
      callback2();
    }
    function third() {
      var now = new Date();
      var Sec = now.getMilliseconds();
      console.log(Sec);
    }
    first(second, third);
  }

  render() {
    return null;
  }
}

export default Sample;
