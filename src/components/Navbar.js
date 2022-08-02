import React, { Component } from "react";

import { handleTshirtSearch, showCart, handleSuggestion } from "./actions";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  showFilters=()=>{
    document.querySelector(".filters").classList.add("toShowFilters");
  }

  // set state of searchText and send disptach to fire auto suggestions
  handleChange = (e) => {
    const { searchText } = this.state;

    this.setState({
      searchText: e.target.value,
    });

    this.props.store.dispatch(handleSuggestion());
  };

  handleSearchResults = (val) => {
    // to hide the search list from screen
    document.querySelector(".auto-sug").classList.add("toHide");

    // function to search ther selected thsirts
    const { searchText } = this.state;
    if (val) {
      this.props.store.dispatch(handleTshirtSearch(val));
      return;
    } else if (searchText === "") {
      alert("Search bar Cannot be empty");
      return;
    } else {
      this.props.store.dispatch(handleTshirtSearch(searchText));
    }
  };

  // function to toggle between product and cart page
  onChangeTab = (val) => {
    this.props.store.dispatch(showCart(val));
  };

  // get count of total items in cart
  getCount = () => {
    let count = 0;
    const { cartList } = this.props;

    cartList.forEach((product) => {
      count += 1;
    });

    return count;
  };

  render() {
    const { searchText } = this.state;

    const { auto } = this.props;

    return (
      <>
        {/* navbar */}
        <div className="nav">
          <div className="title">TeeRex Store</div>

          <div className="big-div">
            <div id="nav-products" onClick={() => this.onChangeTab(true)}>
              Products
            </div>
            <div className="shopcart" onClick={() => this.onChangeTab(false)}>
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className="qty">
                <p>{this.getCount()}</p>
              </span>
            </div>
          </div>
        </div>

        {/*search bar starts here  */}

        <div className="searchbar">
          <span>
            <input
              type="search"
              name=""
              id="search-box"
              onChange={this.handleChange}
            />
            <button className="btn-style" onClick={this.handleSearchResults}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            {/*below block  will fire autosuggestios while searching*/}
            <div className="auto-sug">
              {auto
                .filter((val) => {
                  // console.log(val);
                  if (searchText == "") {
                    return;
                  } else if (
                    val.toLowerCase().startsWith(searchText.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => {
                  return (
                    <div className="single-item">
                      <p onClick={() => this.handleSearchResults(val)}>{val}</p>
                    </div>
                  );
                })}
            </div>
          </span>
          <span>
            <i className="fa-solid fa-filter" onClick={this.showFilters}></i>
          </span>
        </div>

      
      </>
    );
  }
}

export default Navbar;
