import React, { Component } from "react";

import { showCart } from "./actions";
import CartItem from "./CartItem";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(showCart(val));
  };

  // get count of total items in cart
  getCount = () => {
    let count = 0;
    const { cartList } = this.props;

    cartList.forEach((product) => {
      count += 1;
    });

    return count;
  };

  render() {
    const { cartList, store, total } = this.props;

    return (
      <>
        <div className="nav">
          <div className="title">TeeRex Store</div>
          <div className="big-div">
            <div id="nav-products" onClick={() => this.onChangeTab(true)}>
              Products
            </div>
            <div className="shopcart" onClick={() => this.onChangeTab(false)}>
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className="qty"><p>{this.getCount()}</p></span>
             
            </div>
          </div>
        </div>

        {/*cart section  */}
        <div>
          <h1>Shopping Cart</h1>
          <div className="total">
          <h1>Total:Rs {total}</h1>
        </div>
        </div>

        <div className="cart-section">
          {cartList.map((item, index) => {
            return <CartItem item={item} key={index} store={store} />;
          })}
        </div>

       
      </>
    );
  }
}

export default Cart;
