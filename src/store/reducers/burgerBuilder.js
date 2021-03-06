import * as actionTypes from '../actions/actionTypes';

import {updateObject} from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 2,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.35
};

const reducer = (state = initialState, action) => {
    let updatedIngredient;
    let updatedIngredients;
    let updatedState;

    switch(action.type) {
        case actionTypes.ADD_INGREDIENTS:
            updatedIngredient = { [action.ingredientName] : state.ingredients[action.ingredientName] + 1 };
            updatedIngredients = updateObject(state.ingredients, updatedIngredient)
            updatedState = {
                ingredients : updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedState);
        case actionTypes.REMOVE_INGREDIENTS:
            updatedIngredient = { [action.ingredientName] : state.ingredients[action.ingredientName] - 1 };
            updatedIngredients = updateObject(state.ingredients, updatedIngredient)
            updatedState = {
                ingredients : updatedIngredients,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedState);
        case actionTypes.SET_INGREDIENTS:
            updatedState = {
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                error: false,
                totalPrice: 2
            }
            return updateObject(state, updatedState);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {
                error: true
            });            
        default:
            return state;
    }
}

export default reducer;