export const getShoppingCart = () => async (dispatch) => {
  dispatch({
    type: "GET_LOADING_SHOPING_CART",
  });
  try {
    const response = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    dispatch({
      type: "GET_SHOPING_CART",
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: "GET_ERRORS_SHOPING_CART",
      payload: {
        message: "ALGO FALLÓ",
      },
    });
  }
};

export const addShoppingCart = (data) => async (dispatch) => {
  dispatch({
    type: "SUCCESS_LOADING_SHOPPING_CART",
  });
  try {
    const localStorageShoppingCart =
      JSON.parse(localStorage.getItem("shoppingCart")) || [];
    localStorageShoppingCart.push(data);
    localStorage.setItem(
      "shoppingCart",
      JSON.stringify(localStorageShoppingCart)
    );
    dispatch({
      type: "SUCCESS_SHOPPING_CART",
      payload: true,
    });
  } catch (error) {
    dispatch({
      type: "ERRORS_SHOPPING_CART",
      payload: {
        message: "ALGO FALLÓ",
      },
    });
  }
};

export const resetProcess = () => async (dispatch) => {
  console.log("entroo");
  dispatch({
    type: "SUCCESS_SHOPPING_CART",
    payload: false,
  });
};
