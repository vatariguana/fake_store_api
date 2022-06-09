const initialState = {
    isLoading: false,
    errors: null,
    productsAll: null,
  };
  
  function AllProducts(state = initialState, action) {
    switch (action.type) {
      case "GET_LOADING_ALL_PRODUCTS":
        return {
          ...state,
          isLoading: true,
          errors: null,
          productsAll: null,
        };
      case "GET_ALL_PRODUCTS":
        return {
          ...state,
          isLoading: false,
          errors: null,
          productsAll: action.payload,
        };
        case "GET_ERRORS_PRODUCTS":
          return {
            ...state,
            isLoading: false,
          productsAll: null,
            errors: action.payload,
          };
      default:
        return state;
    }
  }
  
  export default AllProducts;