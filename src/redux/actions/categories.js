export const getAllCategories = () => async (dispatch) => {
  dispatch({
    type: "GET_LOADING_ALL_CATEGORIES",
  });
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categories = await response.json();
    dispatch({
      type: "GET_ALL_CATEGORIES",
      payload: categories,
    });
  } catch (error) {
    dispatch({
      type: "GET_ERRORS_CATEGORIES",
      payload: {
        message: "ALGO FALLÓ",
      },
    });
  }
};



