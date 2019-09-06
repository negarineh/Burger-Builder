import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  // loading: false,
  error: false,
  building: false,
};

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
const addIngredients = (state, action) => {
  const updateIngredient = updateObject({ [action.ingredientName]: state.ingredients[action.ingredientName] + 1 });
  const updatedIngredients = updateObject(state.ingredients, updateIngredient);
  const updateState = updateObject({
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
    building: true,
  });
  return updateObject(state, updateState);
};

const removeIngredients = (state, action) => {
  const updateIng = updateObject({ [action.ingredientName]: state.ingredients[action.ingredientName] - 1 });
  const updatedIngs = updateObject(state.ingredients, updateIng);
  const updateSt = updateObject({
    ingredients: updatedIngs,
    totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
    building: true,
  });
  return updateObject(state, updateSt);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
    building: false,
  });
};

const fetchIngredients = (state) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS: return addIngredients(state, action);
    case actionTypes.REMOVE_INGREDIENTS: return removeIngredients(state, action);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredients(state);
    default:
      return state;
  }
};

export default reducer;