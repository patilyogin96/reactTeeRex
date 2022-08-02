import {
  ADD_TSHIRT_TO_LIST,
  ADD_TO_CART,
  SHOW_CART,
  COLOR_FILTER,
  CAL_TOTAL,
  ADD_SUGGESTIONS,
  ADD_PRICE,
  DELETE_ITEM,
  TYPE_FILTER,
} from "../actions";

const initialTshirtsState = {
  listog: [],
  cartList: [],
  showCart: true,
  listshow: [],
  total: 0,
  suggesstions: [],
  clickColor: "",
  clickType: "",
  clickPrice: "",
};

export default function tshirts(state = initialTshirtsState, action) {
  // console.log("Acction type" , action.type);
  // console.log("Action tshit" , action.tshirts);

  switch (action.type) {
    case ADD_TSHIRT_TO_LIST: {
      // console.log("Entered here");
      return {
        ...state,
        listog: [action.tshirts, ...state.listog],
        listshow: [action.tshirts, ...state.listog],
      };
    }

    case ADD_TO_CART: {
      return {
        ...state,
        cartList: [action.tshirt, ...state.cartList],
      };
    }

    case SHOW_CART: {
      return {
        ...state,
        showCart: action.val,
      };
    }

    case DELETE_ITEM: {
      let newTotal = 0;
      let arrayAfterDelete = [];
      state.cartList.forEach((element) => {
        console.log(action.item.id);
        if (element.id != action.item.id) {
          arrayAfterDelete.push(element);
        }
      });
      console.log("New Delete array reducer", arrayAfterDelete);

      arrayAfterDelete.forEach((element) => {
        newTotal = newTotal + element.price * element.seletedquant;
      });

      console.log("New Total", newTotal);

      return {
        ...state,
        cartList: arrayAfterDelete,
        total: newTotal,
      };
    }

    case COLOR_FILTER: {
      let filterList = [];
      if (action.val === null) {
        return {
          ...state,
          listshow: state.listog,
          clickColor: true,
        };
      } else {
        filterList = state.listog.filter((elem) => {
          // console.log("element", elem);
          return elem.color === action.val;
        });

        return {
          ...state,
          listshow: filterList,
          clickColor: false,
        };
      }
    }

    case ADD_PRICE: {
      console.log("action array", action.array);
      if (action.array === null) {
        return {
          ...state,
          listshow: state.listog,
          clickPrice: true,
        };
      } else {
        return {
          ...state,
          listshow: action.array,
          clickPrice: false,
        };
      }
    }

    case TYPE_FILTER: {
      if (action.array === null) {
        return {
          ...state,
          listshow: state.listog,
          clickType: true,
        };
      } else {
        return {
          ...state,
          listshow: action.array,
          clickType: false,
        };
      }
    }

    case CAL_TOTAL: {
      if (action.sum.num <= 0) {
        return {
          ...state,
          total: state.total + action.sum.price,
        };
      } else {
        return {
          ...state,
          total: state.total + action.sum.price,
        };
      }
    }

    case ADD_SUGGESTIONS: {
      // console.log("action.suggest", action.suggest);

      return {
        ...state,
        suggesstions: [action.suggest, ...state.suggesstions],
      };
    }

    default:
      return state;
  }
}
