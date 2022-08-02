import React, { Component } from "react";
import { addFilter, addPriceFilter, addTypeFilter } from "./actions";

export class Filters extends Component {

  // close the filter
  closeFilter = () =>{
    document.querySelector(".filters").classList.remove("toShowFilters");
  } 
  // to filter according to type
  onTypeFilter = (e) => {
    const { clickType } = this.props.store.getState();

    const { list } = this.props;
    // array to store on selected type tshirts
    let filteredArray = [];

    list.forEach((element) => {
      if (element.type == e) {
        filteredArray.push(element);
      }
    });
    console.log("type array", filteredArray);

    if (clickType === "") {
      this.props.store.dispatch(addTypeFilter(filteredArray, true));
    } else if (clickType == false) {
      this.props.store.dispatch(addTypeFilter(null, false)); //to send null if input box is unchecked so that previous results are displayed
    } else if (clickType == true) {
      this.props.store.dispatch(addTypeFilter(filteredArray, true)); //to send filterd array if input box checked
    }
  };

  // filter according to selected price range
  onPriceFilter = (v1, v2) => {

    const {clickPrice} = this.props.store.getState();
    let filteredArray = [];

    const { list } = this.props;

    list.forEach((element) => {
      if (element.price > v1 && element.price <= v2) {
        filteredArray.push(element);
      }
    });

    
    if (clickPrice === "") {
      this.props.store.dispatch(addPriceFilter(filteredArray, true));
    } else if (clickPrice == false) {
      this.props.store.dispatch(addPriceFilter(null, false)); //to send null if input box is unchecked so that previous results are displayed
    } else if (clickPrice == true) {
      this.props.store.dispatch(addPriceFilter(filteredArray, true)); //to send filterd array if input box checked
    }
   

    
  };

  // this function will filter tshirts according to color
  onChangeFilter = (val) => {
    //  iff clickcolor false

    const { clickColor } = this.props.store.getState();

    console.log("coutn", clickColor);

    if (clickColor === "") {
      console.log("executed here");

      this.props.store.dispatch(addFilter(val.target.value, true));
    } else if (clickColor == false) {
      console.log("execured with not value");
      this.props.store.dispatch(addFilter(null, false));
    } else if (clickColor == true) {
      this.props.store.dispatch(addFilter(val.target.value, true));
    }
  };
  render() {
    return (
      <>
      
        <div className="filters">
          <div className="close-btn"><i class="fa-solid fa-xmark" onClick={this.closeFilter}></i></div>
          <div className="filter">
            <h2>Color</h2>

            <input type="checkbox" value="Red" onClick={this.onChangeFilter} />
            <label htmlFor="">Red</label>
            <br />

            <input
              type="checkbox"
              name=""
              id=""
              value="Blue"
              onClick={this.onChangeFilter}
            />
            <label htmlFor="">Blue</label>
            <br />

            <input
              type="checkbox"
              name=""
              id=""
              value="Black"
              onClick={this.onChangeFilter}
            />
            <label htmlFor="">Black</label>

            <br />

            <input
              type="checkbox"
              name=""
              id=""
              value="Grey"
              onClick={this.onChangeFilter}
            />
            <label htmlFor="">Grey</label>
            <br />
          </div>
          {/* give value to every input */}
          <div className="filter">
            <h2>Gender</h2>
            <input type="checkbox" value="Male" onClick={this.onChangeFilter} />
            <label htmlFor="">Male</label>

            <br />
            <input
              type="checkbox"
              value="Female"
              onClick={this.onChangeFilter}
            />
            <label htmlFor="">Female</label>
          </div>

          <div className="filter">
            <h2>Price</h2>
            <input type="checkbox" onClick={() => this.onPriceFilter(0, 250)} />
            <label htmlFor="">0- Rs 250</label>
            <br />

            <input
              type="checkbox"
              name=""
              id=""
              onClick={() => this.onPriceFilter(251, 450)}
            />
            <label htmlFor="">Rs 251 - Rs 450</label>

            <br />

            <input
              type="checkbox"
              name=""
              id=""
              onClick={() => this.onPriceFilter(451, 1000)}
            />
            <label htmlFor="">Rs 450 - Rs 1000</label>

            <br />
          </div>

          <div className="filter">
            <h2>Type</h2>
            <input
              type="checkbox"
              name=""
              id=""
              onClick={() => this.onTypeFilter("Polo")}
            />
            <label htmlFor="">Polo</label>

            <br />

            <input
              type="checkbox"
              name=""
              id=""
              onClick={() => this.onTypeFilter("Hoodie")}
            />
            <label htmlFor="">Hoodie</label>
            <br />

            <input
              type="checkbox"
              name=""
              id=""
              onClick={() => this.onTypeFilter("Basic")}
            />
            <label htmlFor="">Basic</label>
            <br />
          </div>
        </div>
      </>
    );
  }
}

export default Filters;
