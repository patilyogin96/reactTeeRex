import React, { Component } from 'react'
import Navbar from './Navbar'
import MainDisplay from './MainDisplay'

export class Products extends Component {
  render() {

    const { listshow, cartList, showCart } = this.props.store.getState();
    const { store } = this.props;

   
    return (
      <>
      <Navbar store={store}/>
      <MainDisplay list={listshow} store={store}/>
      
      </>
    )
  }
}

export default Products;