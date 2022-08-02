import React, { Component } from "react";
import "./App.css";

import Cart from "./Cart";
import Products from "./Products";

export class App extends Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {

    const { cartList, showCart, total, suggesstions } =
      this.props.store.getState();
    //  this will remove duplicate elements from the array
    const filteredSuggest = [...new Set(suggesstions)];

    const { store } = this.props;

    return (
      <div className="App">
        {/* if products tab is clicked then it will show prducts or if cart tab is clicked it will show cart */}
        {/* Product and cart component has been sent with store props */}
        {showCart ? (
          <Products store={store} auto={filteredSuggest} />
        ) : (
          <Cart store={store} cartList={cartList} total={total} />
        )}
      </div>
    );
  }
}

export default App;
