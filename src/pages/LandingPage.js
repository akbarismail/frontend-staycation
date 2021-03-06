import React, { Component } from "react";

import landingPage from "json/landingPage.json";

import Header from "parts/Headers";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Home Page";
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <main>
          <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
          <MostPicked
            refMostPicked={this.refMostPicked}
            data={landingPage.mostPicked}
          />
          <Categories data={landingPage.categories} />
          <Testimony data={landingPage.testimonial} />
        </main>
        <Footer />
      </>
    );
  }
}
