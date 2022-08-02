import React, { Component, useEffect } from "react";
import { increaseQuantity, calTot,deleteFromCart } from "./actions";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props;

    item.seletedquant = 1;

    this.state = {
      item,
    };
  }

  // handle delete
  handleDelete = () => {
    console.log("delete", this.props.item);
    const { item } = this.props;

    // dispatch
    this.props.store.dispatch(deleteFromCart(item));
  };

  handleIncrease = () => {
    const { item } = this.props;

    item.seletedquant += 1;

    if (item.seletedquant > item.quantity) {
      alert("Only " + item.quantity + " item of selected product available");
    } else {
      this.setState({
        item,
      });

      this.props.store.dispatch(calTot(item.price, item.seletedquant));
    }

    // console.log("Item Item", item);
  };

  handleDecrease = () => {
    const { item } = this.props;

    item.seletedquant -= 1;

    if (item.seletedquant < 1) {
      alert("Atleast one item required");
      return;
    } else {
      this.setState({
        item,
      });

      this.props.store.dispatch(calTot(-item.price, item.seletedquant));
    }
  };

  render() {
    const { item } = this.props;

    // console.log("entryNew", item);

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
            <button onClick={this.handleDecrease}>-</button>
            <input value={item.seletedquant} readOnly />
            <button onClick={this.handleIncrease}>+</button>
          </div>
          <div className="del-btn">
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </>
    );
  }
}

export default CartItem;
