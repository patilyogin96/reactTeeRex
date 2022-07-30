import React, { Component } from "react";
import SingleTshirtCard from "./SingleTshirtCard";

export class TshirtsCard extends Component {
  render() {
    const {store} = this.props;

    const {list} = this.props;
    return (
      <>
        <div className="card-display">

            {list.map((tshirt , index)=>{
                return  <SingleTshirtCard tshirt={tshirt} key={index} store={store} />
            })}

           

         
         
        </div>
      </>
    );
  }
}

export default TshirtsCard;
