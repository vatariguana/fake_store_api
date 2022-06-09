export const getAllProducts = () => async (dispatch) => {
  dispatch({
    type: "GET_LOADING_ALL_PRODUCTS",
  });
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: "GET_ERRORS_PRODUCTS",
      payload: {
        message: "ALGO FALLÓ",
      },
    });
  }
};
