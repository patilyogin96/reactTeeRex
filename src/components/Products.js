import React, { Component } from 'react'
import Navbar from './Navbar'
import MainDisplay from './MainDisplay'

export class Products extends Component {
  render() {
        //  destructuring from store
    const { listshow, cartList, showCart  } = this.props.store.getState();
    const { store , showAllTees } = this.props;
    const {auto} = this.props;
    let displayList =[]
    console.log("Show All tees" , showAllTees);

    console.log("list show", listshow.length);

    if(listshow.length == 0){
      displayList = showAllTees;

    }
    else{
      displayList = listshow
    }

    

   
    return (
      <>
      {/* fire navbar and main display and wrap it together */}
      {/* main display sent with list of tshirts and store as props */}

      <Navbar store={store} auto={auto} cartList={cartList}/>

      
      <MainDisplay list={displayList} store={store}/>
      
      </>
    )
  }
}

export default Products;