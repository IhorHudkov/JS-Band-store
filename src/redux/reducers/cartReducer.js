import { ADD_TO_CART, EMPTY_CART } from '../types';

const initialState = {
  books: [],
  totalPrice: 0,
  totalQuantity: 0
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        books: state.books.concat(action.payload.book),
        totalPrice:
          Number(state.totalPrice) + Number(action.payload.totalPrice),
        totalQuantity:
          Number(state.totalQuantity) + Number(action.payload.quantity)
      };
    case EMPTY_CART:
      return { ...initialState };
    default:
      return state;
  }
};
