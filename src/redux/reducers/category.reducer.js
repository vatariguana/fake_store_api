const initialState = {
    isLoading: false,
    errors: null,
    categories: null,
  };
  
  function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_LOADING_ALL_CATEGORIES":
        return {
          ...state,
          isLoading: true,
          errors: null,
          categories: null,
        };
      case "GET_ALL_CATEGORIES":
        return {
          ...state,
          isLoading: false,
          errors: null,
          categories: action.payload,
        };
        case "GET_ERRORS_CATEGORIES":
          return {
            ...state,
            isLoading: false,
          categories: null,
            errors: action.payload,
          };
         
      default:
        return state;
    }
  }
  
  export default categoryReducer;