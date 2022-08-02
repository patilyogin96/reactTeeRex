import React, { Component } from 'react'
import Navbar from './Navbar'
import MainDisplay from './MainDisplay'

export class Products extends Component {
  render() {
        //  destructuring from store
    const { listshow, cartList, showCart ,  } = this.props.store.getState();
    const { store } = this.props;
    const {auto} = this.props

   
    return (
      <>
      {/* fire navbar and main display and wrap it together */}
      {/* main display sent with list of tshirts and store as props */}

      <Navbar store={store} auto={auto} cartList={cartList}/>
      <MainDisplay list={listshow} store={store}/>
      
      </>
    )
  }
}

export default Products;