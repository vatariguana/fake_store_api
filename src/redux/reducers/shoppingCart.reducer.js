const initialState = {
  isLoading: false,
  errors: null,
  cart: null,
  success: null,
};

function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LOADING_SHOPING_CART":
      return {
        ...state,
        isLoading: true,
        errors: null,
        cart: null,
      };
    case "GET_SHOPING_CART":
      return {
        ...state,
        isLoading: false,
        errors: null,
        cart: action.payload,
      };
    case "GET_ERRORS_SHOPING_CART":
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
        cart: null,
      };
    case "SUCCESS_LOADING_SHOPPING_CART":
      return {
        ...state,
        isLoading: true,
        errors: null,
        success: null,
      };
    case "SUCCESS_SHOPPING_CART":
      return {
        ...state,
        isLoading: false,
        errors: null,
        success: action.payload,
      };
    case "ERRORS_SHOPPING_CART":
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
        success: null,
      };

    default:
      return state;
  }
}

export default shoppingCartReducer;
