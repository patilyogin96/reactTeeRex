
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
    const { listshow, cartList, showCart } = this.props.store.getState();

    // console.log("list", list);
    console.log("New filter list", listshow);


    const { store } = this.props;

    // console.log(store);
    return (
      <div className="App">
       
           
            {showCart ? <Products store={store}/>  : <Cart store={store} cartList={cartList}/> }
          

            
            
      </div>
    );
  }
}

export default App;
