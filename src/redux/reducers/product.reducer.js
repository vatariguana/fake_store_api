const initialState = {
    isLoading: false,
    errors: null,
    products: null,
  };
  
  function productReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_LOADING_ALL_PRODUCTS":
        return {
          ...state,
          isLoading: true,
          errors: null,
          products: null,
        };
      case "GET_ALL_PRODUCTS":
        return {
          ...state,
          isLoading: false,
          errors: null,
          products: action.payload,
        };
        case "GET_ERRORS_PRODUCTS":
          return {
            ...state,
            isLoading: false,
          products: null,
            errors: action.payload,
          };
      default:
        return state;
    }
  }
  
  export default productReducer;