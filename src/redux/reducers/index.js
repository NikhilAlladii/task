import { combineReducers } from "redux";
import { recipeReducer } from "./recipeReducer";
import { signUpReducer } from "./signUpReducer";

export const reducers = combineReducers({
  allRecipes: recipeReducer,
  signUp: signUpReducer,
});
