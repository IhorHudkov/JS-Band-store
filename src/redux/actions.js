import { ADD_TO_CART, EMPTY_CART } from './types';

export function addToCart(order) {
  return {
    type: ADD_TO_CART,
    payload: order
  };
}

export function emptyCart() {
  return {
    type: EMPTY_CART
  };
}
