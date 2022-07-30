import { ADD_TSHIRT_TO_LIST , ADD_TO_CART , SHOW_CART , COLOR_FILTER } from "../actions";

const initialTshirtsState = {
  listog: [],
  cartList:[],
  showCart : true,
  listshow :[],
};

export default function tshirts(state = initialTshirtsState, action) {
  // console.log("Acction type" , action.type);
  // console.log("Action tshit" , action.tshirts);

  switch (action.type) {
    case ADD_TSHIRT_TO_LIST: {
      // console.log("Entered here");
      return {
        ...state,
        listog : [action.tshirts, ...state.listog],
        listshow : [action.tshirts, ...state.listog],
      };
    }

    case ADD_TO_CART : {

      return {
        ...state,
        cartList : [action.tshirt,...state.cartList]
      }
    }

    case SHOW_CART : {
      return {
        ...state,
        showCart : action.val
      }
    }

    case COLOR_FILTER : {

      if(action.val === null){

        return{
          ...state,
          listshow : state.listog
        }

      }
      else{

        const filterList = state.listog.filter((elem)=>{

          // console.log("element", elem);
          return elem.color === action.val;
    
        })
  
        return{
  
          ...state,
          listshow : filterList
        }

      }

     
    }
    default:
      return state;
  }
}
