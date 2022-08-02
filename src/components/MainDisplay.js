import React, { Component } from "react";

import Filters from "./Filters";
import TshirtsCard from "./TshirtsCard";

export class MainDisplay extends Component {
  render() {
    const { store } = this.props;

    const { list } = this.props;

    return (
      <>
        <div className="main-display">
          {/* wrap all filters and Tshirts to be shown in one screen*/}
          <Filters store={store} list={list} />

          <TshirtsCard list={list} store={store} />
        </div>
      </>
    );
  }
}

export default MainDisplay;
