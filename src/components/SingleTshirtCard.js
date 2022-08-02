import React, { Component } from 'react'

import { addToCart } from './actions';

export class SingleTshirtCard extends Component {

  handleAddToCart = ()=>{
    const{tshirt} = this.props;

    if(tshirt.quantity == 0){
      alert("Selected item not available in stock")
      return;
    }
    else{
      this.props.store.dispatch(addToCart(tshirt))

    }
   

    



  }
  render() {

    // const {store} = this.props;

    const {tshirt} = this.props;
    return (
      <>
       <div className="card">
            <div className="t-name">
              <h3> {tshirt.name}</h3>
            </div>

            <div className="imgT">
              <img src={tshirt.imageURL} alt="tshirt" />
            </div>

            <div className="t-details">
              <span>Rs {tshirt.price}</span>

              <span>
                <button onClick={this.handleAddToCart}>Add to Cart</button>
              </span>
            </div>
          </div>
      
      </>
    )
  }
}

export default SingleTshirtCard