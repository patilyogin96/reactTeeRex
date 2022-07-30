import React, { Component } from "react";

import { showCart } from "./actions";
import CartItem from "./CartItem";

export class Cart extends Component {
  onChangeTab = (val) => {
    this.props.store.dispatch(showCart(val));
  };
  render() {
    const { cartList } = this.props;

    console.log("CArt LIst inside cart", cartList);

    return (
      <>
        <div className="nav">
          <div className="title">TeeRex Store</div>
          <div className="title" onClick={() => this.onChangeTab(true)}>
            Products
          </div>
          <div className="shopcart" onClick={() => this.onChangeTab(false)}>
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="qty">2</span>
          </div>
        </div>

        {/*cart section  */}

        <div className="cart-section">
          {cartList.map((item, index) => {
            return <CartItem item={item} key={index} />;
          })}
        </div>
      </>
    );
  }
}

export default Cart;
