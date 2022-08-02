import React, { Component } from "react";
import "./App.css";

import Cart from "./Cart";
import Products from "./Products";

export class App extends Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      // console.log("UPDATED");
      this.forceUpdate();
    });

    // store.dispatch(addMovies(list))
  }

  render() {
    const { listshow, cartList, showCart, total, suggesstions } =
      this.props.store.getState();

    const filteredSuggest = [...new Set(suggesstions)];

    const { store } = this.props;

    return (
      <div className="App">
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
