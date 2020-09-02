import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function getProducts(selectedCategoryID) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (selectedCategoryID) {
      url = url + "?categoryId=" + selectedCategoryID;
    }
    return fetch(url).then((response) =>
      response.json().then((result) => dispatch(getProductsSuccess(result)))
    );
  };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  //id yollarsak güncelleme, yoksa eklemedir

  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json()
  }

  const error = await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.error("Bir hata olustu")
  throw error;
}
