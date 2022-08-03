import React, { Component } from "react";
import "./App.css";

import Cart from "./Cart";
import Products from "./Products";
import tshirts from "./reducers";

export class App extends Component {

  constructor(props) {
    super(props);
    

    this.state = {
      showAllTees : []
    };
  }


  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    });


    const url = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

    fetch(url)
    .then((response)=> response.json())
    .then((tshirts)=>{
      this.setState({
        showAllTees : tshirts,

      })


    })

    
  }

  render() {

    const { cartList, showCart, total, suggesstions } =
      this.props.store.getState();

      const {showAllTees} = this.state;
     
    
    //  this will remove duplicate elements from the array
    const filteredSuggest = [...new Set(suggesstions)];

    const { store } = this.props;
    

    return (
      <div className="App">
        {/* if products tab is clicked then it will show prducts or if cart tab is clicked it will show cart */}
        {/* Product and cart component has been sent with store props */}
        {showCart ? (
          <Products store={store} auto={filteredSuggest} showAllTees={showAllTees} />
        ) : (
          <Cart store={store} cartList={cartList} total={total}  />
        )}
      </div>
    );
  }
}

export default App;
