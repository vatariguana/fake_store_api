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
export const getAllProductsByCategory = (category) => async (dispatch) => {
  dispatch({
    type: "GET_LOADING_ALL_PRODUCTS",
  });
  try {
    let url = `https://fakestoreapi.com/products/category/${category}`;
    if (category === "All categories") {
      url = "https://fakestoreapi.com/products";
    }
    const response = await fetch(url);
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
export const getProductDetail = (id) => async (dispatch) => {
  dispatch({
    type: "GET_LOADING_ALL_PRODUCTS",
  });
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    dispatch({
      type: "GET_PRODUCT_DETAIL",
      payload: product,
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
