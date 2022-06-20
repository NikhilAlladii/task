import { ActionTypes } from "../contants/action-types";

export const setRecipe = (recipes) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SET_RECIPES,
    payload: recipes,
  });
};

export const selectedRecipe = (recipe) => {
  return {
    type: ActionTypes.SELECTED_RECIPE,
    payload: recipe,
  };
};

export const editReceipe = (
  id,
  receipeName,
  receipeDes,
  ingrediantOil,
  ingrediantSalt,
  ingrediantPowder
) => {
  return {
    type: ActionTypes.EDIT_RECIPE,
    payload: {
      id,
      receipeName,
      receipeDes,
      ingrediantOil,
      ingrediantSalt,
      ingrediantPowder,
    },
  };
};
