import React, { Component } from 'react'
import Navbar from './Navbar'
import MainDisplay from './MainDisplay'

export class Products extends Component {
  render() {

    const { listshow, cartList, showCart ,  } = this.props.store.getState();
    const { store } = this.props;
    const {auto} = this.props

   
    return (
      <>
      <Navbar store={store} auto={auto} cartList={cartList}/>
      <MainDisplay list={listshow} store={store}/>
      
      </>
    )
  }
}

export default Products;