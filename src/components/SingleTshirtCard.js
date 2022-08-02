import React, { Component } from "react";

import { addToCart, calTot } from "./actions";

export class SingleTshirtCard extends Component {

  // this function will add the selected thsirt to cart
  handleAddToCart = () => {
    const { tshirt } = this.props;
      // if default quantity is 0 then alert  id fired
    if (tshirt.quantity == 0) {
      alert("Selected item not available in stock");
      return;
    } else {
      this.props.store.dispatch(addToCart(tshirt));
      this.props.store.dispatch(calTot(tshirt.price, 1));
    }
  };
  render() {
    const { tshirt } = this.props;
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
    );
  }
}

export default SingleTshirtCard;
