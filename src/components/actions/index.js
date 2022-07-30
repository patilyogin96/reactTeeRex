// action types
export const ADD_TSHIRT_TO_LIST = "ADD_TSHIRT_TO_LIST";

export const ADD_TO_CART = "ADD_TO_CART";

export const SHOW_CART = "SHOW_CART";

export const COLOR_FILTER = "COLOR_FILTER"

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
export function addToCart(tshirt){
  // console.log("Adding to cart" , tshirt);

  return{
    type : ADD_TO_CART,
    tshirt
  }

}

// action creater to show the cart
export function showCart(val){

  return{
    type : SHOW_CART,
    val
  }
}

// action creater to add filter

export function addFilter(val){
  // console.log(val);

  return{
    type : COLOR_FILTER,
    val

  }
}
