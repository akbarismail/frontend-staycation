import React, { Component } from "react";

import Headers from "parts/Headers";
import PageDetailsTitle from "parts/PageDetailsTitle";

import itemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Headers {...this.props} />
        <PageDetailsTitle data={itemDetails} breadcrumbList={breadcrumbList} />
      </>
    );
  }
}
