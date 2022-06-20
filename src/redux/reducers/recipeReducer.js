import { ActionTypes } from "../contants/action-types";

const initialState = {
  recipes: [
    {
      id: "1",
      receipeName: "Bendi",
      receipeDes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      ingrediantOil: "30",
      ingrediantSalt: "50",
      ingrediantPowder: "100",
      imageLink:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2022%2F05%2F18%2Fhow-to-handle-raw-chicken-2000.jpg&q=60",
    },
    {
      id: "2",
      receipeName: "Tomato",
      receipeDes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      ingrediantOil: "30",
      ingrediantSalt: "50",
      ingrediantPowder: "100",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/800px-Bright_red_tomato_and_cross_section02.jpg",
    },
    {
      id: "3",
      receipeName: "Potato",
      receipeDes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      ingrediantOil: "30",
      ingrediantSalt: "50",
      ingrediantPowder: "100",
      imageLink:
        "https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
    },
    {
      id: "4",
      receipeName: "Pannir",
      receipeDes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      ingrediantOil: "30",
      ingrediantSalt: "50",
      ingrediantPowder: "100",
      imageLink:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2022%2F05%2F18%2Fhow-to-handle-raw-chicken-2000.jpg&q=60",
    },
  ],
  favorite: [
    {
      id: "11",
      receipeName: "Chapathi",
      receipeDes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      ingrediantOil: "30",
      ingrediantSalt: "50",
      ingrediantPowder: "100",
      imageLink:
        "https://static.toiimg.com/thumb/61203720.cms?imgsize=670417&width=800&height=800",
    },
    {
      id: "12",
      receipeName: "Chocolate",
      receipeDes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      ingrediantOil: "30",
      ingrediantSalt: "50",
      ingrediantPowder: "100",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4jxEogKb83ewbCKc7PiJrJmj9w-TVtWtiF_AI2JqyNPINagilgAMWnfglF1QSRPkSnc&usqp=CAU",
    },
  ],
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_RECIPES:
      return { ...state, recipes: [...state.recipes, action.payload] };

    case ActionTypes.REMOVE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };

    case ActionTypes.EDIT_RECIPE:
      return state.recipes.map((receipe) =>
        receipe.id === action.payload.id
          ? {
              ...receipe,
              receipeName: action.payload.receipeName,
              receipeDes: action.payload.receipeDes,
              ingrediantOil: action.payload.ingrediantOil,
              ingrediantSalt: action.payload.ingrediantSalt,
              ingrediantPowder: action.payload.ingrediantPowder,
            }
          : receipe
      );

    case ActionTypes.ADD_FAVORITE_RECIPE:
      return { ...state, favorite: [...state.favorite, action.payload] };

    case ActionTypes.FAVORITE_REMOVE_RECEIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };

    case ActionTypes.ADD_UNFAVORITE_TO_ALL_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };

    case ActionTypes.REMOVE_FROM_FAVORITE_RECIPE:
      return {
        ...state,
        favorite: state.favorite.filter(
          (recipe) => recipe.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
