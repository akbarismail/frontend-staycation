import React, { Component } from "react";

import Header from "parts/Headers";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}
