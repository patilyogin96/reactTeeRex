import React, { Component } from "react";

import { handleTshirtSearch , showCart } from "./actions";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });

    // console.log("Handle change");
  };

  handleSearchResults = () => {
    const { searchText } = this.state;
    if (searchText === "") {
      alert("Search bar Cannot be empty");
      return;
    }
    this.props.store.dispatch(handleTshirtSearch(searchText));

    console.log("Handle Search Results");
  };

  onChangeTab = (val)=>{
    this.props.store.dispatch(showCart(val))
  }

  render() {
    return (
      <>
        {/* navbar */}
        <div className="nav">
          <div className="title">TeeRex Store</div>
          <div className="title" onClick={() => this.onChangeTab(true)}>Products</div>
          <div className="shopcart" onClick={() => this.onChangeTab(false)}>
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="qty">2</span>
          </div>
        </div>

        {/*search bar  */}

        <div className="searchbar">
          <span>
            <input type="search" name="" id="" onChange={this.handleChange} />

            <button onClick={this.handleSearchResults}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </span>
        </div>

        {/* main display bar */}
      </>
    );
  }
}

export default Navbar;
