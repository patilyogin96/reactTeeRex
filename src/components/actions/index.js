// action types
export const ADD_TSHIRT_TO_LIST = "ADD_TSHIRT_TO_LIST";

export const ADD_TO_CART = "ADD_TO_CART";

export const SHOW_CART = "SHOW_CART";

export const COLOR_FILTER = "COLOR_FILTER";

export const CAL_TOTAL = "CAL_TOTAL";

export const ADD_SUGGESTIONS = "ADD_SUGGESTIONS"

export const ADD_PRICE = "ADD_PRICE"

export const DELETE_ITEM = "DELETE_ITEM"

export const TYPE_FILTER = "TYPE_FILTER"

// action creaters

export function handleTshirtSearch(tshirtsSearched) {
  const url =
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((tshirt) => {
        tshirt.forEach((element) => {
          let name = element.name;

          let nameL = name.toLowerCase();

          let img = element.imageURL;

          let price = element.price;

          let type = element.type;
          let gender = element.gender;
          let color = element.color;

          if (tshirtsSearched === nameL || tshirtsSearched === name) {
            dispatch(addTshirtsToList(element));
            // console.log("Condition true" , element );
          } else if (
            tshirtsSearched === type ||
            tshirtsSearched === type.toLowerCase()
          ) {
            dispatch(addTshirtsToList(element));
          } else if (
            tshirtsSearched === color ||
            tshirtsSearched === color.toLowerCase()
          ) {
            dispatch(addTshirtsToList(element));
          }
        });
      });
  };
}

export function addTshirtsToList(tshirts) {
  // console.log("addddddd", tshirts);
  return {
    type: ADD_TSHIRT_TO_LIST,
    tshirts: tshirts,
  };
}

// action creator for adding tshirt to cart list
export function addToCart(tshirt) {
  // console.log("Adding to cart" , tshirt);

  return {
    type: ADD_TO_CART,
    tshirt,
  };
}

// action creater to show the cart
export function showCart(val) {
  return {
    type: SHOW_CART,
    val,
  };
}

// action creater to add filter
// filter the list according to color
export function addFilter(val , ifcheck) {
  // console.log(val);

  return {
    type: COLOR_FILTER,
    ifcheck,
    val,

  };
}

// action to calculate total
export function calTot(p, q) {
  return {
    type: CAL_TOTAL,
    sum: {
      price: p,
      num: q,
    },
  };
}


// handle suggestion, fetch all data and store name,type and color of tshirts in array and dispatch the array

export function handleSuggestion(){
  console.log("Reahhed here");
  const url =
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((tshirt) => {
        tshirt.forEach((element) => {

          dispatch(addSuggesstions(element.name));
          dispatch(addSuggesstions(element.color));
          dispatch(addSuggesstions(element.type));

         

        });
      });
  };

}

// sends suggest array which contains all suggestion to reducer
export function addSuggesstions(suggest){

  return{
    type : ADD_SUGGESTIONS,
    suggest
  }
}

// price filter
export function addPriceFilter(array , isPresent){
  return{
    type : ADD_PRICE,
    array,
    isPresent,
  }
}

// tshirts type filter
export function addTypeFilter(array , ifPresent){
  return{
    type : TYPE_FILTER,
    array,
    ifPresent,

  }

}

// delete from cart
export function deleteFromCart(item){
  return{
    type : DELETE_ITEM,
    item,
  }
}