import React, { Component } from "react";

import Filters from "./Filters";
import TshirtsCard from "./TshirtsCard";

export class MainDisplay extends Component {
  render() {

    const {store} = this.props;
    // console.log("check props", store);
    const { list } = this.props;

    // console.log("list in card", list);
    return (
      <>
     
        <div className="main-display">
        <Filters store={store} list={list}/>
        

        
          <TshirtsCard list={list} store={store} />
    
        
          
        </div>
      </>
    );
  }
}

export default MainDisplay;
