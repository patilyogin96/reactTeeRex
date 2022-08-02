import React, { Component } from "react";
import { addFilter ,addPriceFilter } from "./actions";



export class Filters extends Component {
 
  // to filter according to type
  onTypeFilter =(e)=>{
    console.log("eee", e);
    const {list} = this.props;
    // array to store on selected type tshirts
    let filteredArray =[];

     list.forEach(element => {
     if(element.type == e)
     {
      filteredArray.push(element)

     }
      
    });
    console.log("type array" , filteredArray);

  }


// filter according to price
  onPriceFilter =(v1, v2)=>{
    let filteredArray =[];

    const {list} = this.props
    // console.log("list in price", list);
    list.forEach(element => {
      if( element.price > v1 && element.price <= v2){
        filteredArray.push(element)
      }
      
    });
    console.log("Filtered array" , filteredArray);
    this.props.store.dispatch(addPriceFilter(filteredArray));

  }
 

  onChangeFilter = (val) => {
  //  iff clickcolor false

     
    const {clickColor} = this.props.store.getState();
    

    console.log("coutn", clickColor);

    if(clickColor === "")
    {
      console.log("executed here");
      
      this.props.store.dispatch(addFilter(val.target.value, true));
      
    }
    else if(clickColor == false)
    {

      console.log("execured with not value");
      this.props.store.dispatch(addFilter(null, false));
      

     
    }
    else if(clickColor == true){
      this.props.store.dispatch(addFilter(val.target.value, true));
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
              <input type="checkbox" name="" id="" value="Black" onClick={this.onChangeFilter} />
              <label htmlFor="">Black</label>
            </span>

            <span>
              <input type="checkbox" name="" id="" value="Grey"  onClick={this.onChangeFilter} />
              <label htmlFor="">Grey</label>
            </span>
          </div>
           {/* give value to every input */}
          <div className="filter-gender filter">
            <span>
              <input type="checkbox"  value="Male" onClick={this.onChangeFilter} />
              <label htmlFor="">Male</label>
            </span>
            <span>
              <input type="checkbox" value="Female" onClick={this.onChangeFilter} />
              <label htmlFor="">Female</label>
            </span>
          </div>

          <div className="filter-price filter">
            <span>
              <input type="checkbox" onClick={()=>this.onPriceFilter(0,250)}/>
              <label htmlFor="">0- Rs 250</label>
            </span>

            <span>
              <input type="checkbox" name="" id="" onClick={()=>this.onPriceFilter(251,450)} />
              <label htmlFor="">Rs 251 - Rs 450</label>
            </span>

            <span>
              <input type="checkbox" name="" id="" onClick={()=>this.onPriceFilter(451,1000)} />
              <label htmlFor="">Rs 450 - Rs 1000</label>
            </span>

            
          </div>

          <div className="filter-type filter">
            <span>
              <input type="checkbox" name="" id=""  onClick={()=>this.onTypeFilter("Polo")} />
              <label htmlFor="">Polo</label>
            </span>

            <span>
              <input type="checkbox" name="" id=""  onClick={()=>this.onTypeFilter("Hoodie")} />
              <label htmlFor="">Hoodie</label>
            </span>

            <span>
              <input type="checkbox" name="" id=""  onClick={()=>this.onTypeFilter("Basic")} />
              <label htmlFor="">Basic</label>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Filters;
