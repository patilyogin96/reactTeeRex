import React, { Component } from "react";

export class CartItem extends Component {
  render() {

   const {item} = this.props;
    return (
      <>
        <div className="cart-item">
          <div className="cart-img">
            <img src={item.imageURL} alt="" />
          </div>
          <div className="item-name">
            <h4>{item.name}</h4>
            <span>Rs {item.price}</span>
          </div>
          <div className="item-qty">
            <button>{item.quantity}</button>
          </div>
          <div className="del-btn">
            <button>Delete</button>
          </div>
        </div>
      </>
    );
  }
}

export default CartItem;
