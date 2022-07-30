import React, { Component } from "react";
import { addFilter } from "./actions";

let count = 0;

export class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inpVal: "",
    };
  }

 

  onChangeFilter = (val) => {
    count++;

    console.log("coutn", count);

    if(count % 2 !== 0 )
    {
      console.log("executed here");
      
      this.props.store.dispatch(addFilter(val.target.value));
      
    }
    else{

      console.log("execured with not value");
      this.props.store.dispatch(addFilter(null));
      

     
    }
    
  };
  render() {
    return (
      <>
        <div className="filters">
          <div className="filter-color filter">
            <label htmlFor="">
              <h2>Color</h2>
            </label>
            <span>
              <input
                type="checkbox"
                value="Red"
                onClick={this.onChangeFilter}
              />
              <label htmlFor="">Red</label>
            </span>

            <span>
              <input
                type="checkbox"
                name=""
                id=""
                value="Blue"
                onClick={this.onChangeFilter}
              />
              <label htmlFor="">Blue</label>
            </span>

            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Black</label>
            </span>

            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Yellow</label>
            </span>
          </div>

          <div className="filter-gender filter">
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Male</label>
            </span>
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Female</label>
            </span>
          </div>

          <div className="filter-price filter">
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">0-250</label>
            </span>

            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">250-500</label>
            </span>

            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">500-750</label>
            </span>

            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">750-1000</label>
            </span>
          </div>

          <div className="filter-type filter">
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Polo</label>
            </span>

            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Hoodie</label>
            </span>

            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Basic</label>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Filters;
