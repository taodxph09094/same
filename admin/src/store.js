import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productReducer";
const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  cart: cartReducer,
  newProduct: newProductReducer,
  newReview: newReviewReducer,
  productDetails: productDetailsReducer,
  product: productReducer,
  productReviews: productReviewsReducer,
  products: productsReducer,
  review: reviewReducer,
});

// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//     shipingInfo: localStorage.getItem("shipingInfo")
//       ? JSON.parse(localStorage.getItem("shipingInfo"))
//       : {},
//   },
// };

const middleware = [thunk];

const store = createStore(
  reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
