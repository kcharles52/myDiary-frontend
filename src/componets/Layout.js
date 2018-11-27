import React, { Component } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
