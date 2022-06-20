import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/recipeAction";
import { ActionTypes } from "../redux/contants/action-types";
import { editReceipe } from "../redux/actions/recipeAction";
import RecipeModal from "./RecipeModal";

import "./Recipe.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  px: 3,
  py: 2,
  borderRadius: "10px",
};

function Recipe() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [showModal, setShowModal] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [selecetdReceipe, setSelectedReceipe] = useState({});
  // console.log("selected", selecetdReceipe);

  const [receipeName, setReceipeName] = useState("");
  const [receipeDes, setReceipeDes] = useState("");
  const [ingrediantOil, setIngrediantOil] = useState("");
  const [ingrediantSalt, setIngrediantSalt] = useState("");
  const [ingrediantPowder, setIngrediantPowder] = useState("");

  const receipes = useSelector((state) => state.allRecipes.recipes);
  const favorites = useSelector((state) => state.allRecipes.favorite);
  const dispatch = useDispatch();
  console.log("recipes is", receipes);
  console.log("favorites is", favorites);

  const totalReceipe = {
    id: Math.ceil(Math.random() * 100),
    receipeName: receipeName,
    receipeDes: receipeDes,
    ingrediantOil: ingrediantOil,
    ingrediantSalt: ingrediantSalt,
    ingrediantPowder: ingrediantPowder,
  };

  const handleRecipe = () => {
    dispatch({
      type: ActionTypes.SET_RECIPES,
      payload: totalReceipe,
    });

    handleClose();
  };

  const handleDelete = (id) => {
    dispatch({
      type: ActionTypes.REMOVE_RECIPE,
      payload: id,
    });
  };

  // const [editEeceipeName, setEditReceipeName] = useState("");
  // const [editReceipeDes, setEditReceipeDes] = useState("");
  // const [editIngrediantOil, setEditIngrediantOil] = useState("");
  // const [editIngrediantSalt, setEditIngrediantSalt] = useState("");
  // const [editIngrediantPowder, setEditIngrediantPowder] = useState("");

  const handleEdit = (receipe) => {
    handleOpenEdit();
    setSelectedReceipe(receipe);
  };

  const handleEditRecipe = () => {
    // console.log("wzesxdrfcghbjkm");

    // const EditableReceipe = {
    //   id: selecetdReceipe.id,
    //   receipeName: editEeceipeName,
    //   receipeDes: editReceipeDes,
    //   ingrediantOil: editIngrediantOil,
    //   ingrediantSalt: editIngrediantSalt,
    //   ingrediantPowder: editIngrediantPowder,
    // };

    dispatch(
      editReceipe(
        selecetdReceipe.id,
        receipeName,
        receipeDes,
        ingrediantOil,
        ingrediantSalt,
        ingrediantPowder
      )
    );

    handleCloseEdit();
  };

  const handleFavorite = (receipe) => {
    dispatch({
      type: ActionTypes.ADD_FAVORITE_RECIPE,
      payload: receipe,
    });

    dispatch({
      type: ActionTypes.FAVORITE_REMOVE_RECEIPE,
      payload: receipe.id,
    });
  };

  const handleUnFavorite = (receipe) => {
    dispatch({
      type: ActionTypes.ADD_UNFAVORITE_TO_ALL_RECIPE,
      payload: receipe,
    });

    dispatch({
      type: ActionTypes.REMOVE_FROM_FAVORITE_RECIPE,
      payload: receipe.id,
    });
  };

  return (
    <div className="mx-5 my-3">
      <h3 className="d-flex align-items-center justify-content-center">
        Receipes
      </h3>
      <div className="d-flex align-items-center justify-content-between my-3">
        <div>
          <h5>List Of All Receipes</h5>
        </div>
        <button type="button" class="btn btn-primary" onClick={handleOpen}>
          Add Recipe
        </button>
      </div>

      <div className="recipeCards">
        {receipes?.map((receipe) => (
          <div key={receipe?.id}>
            <div className="eachCard p-2">
              <div className="d-flex align-items-center justify-content-between my-3">
                <h5 className="d-flex align-items-center justify-content-center">
                  <b>{receipe?.receipeName}</b>
                </h5>
                <div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      handleFavorite(receipe);
                      // setEditReceipeName(receipe);
                    }}
                  >
                    <small> Add Favorite</small>
                  </button>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={
                    receipe?.imageLink
                      ? receipe?.imageLink
                      : `https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000`
                  }
                  alt="recipeImage"
                  className="recipeImage"
                />
              </div>

              <p>
                <small>{receipe?.receipeDes}</small>
              </p>
              <h6>Recipe Ingrediants:-</h6>
              <p>salt:-{receipe?.ingrediantSalt}gms</p>
              <p>oil:-{receipe?.ingrediantOil}ml</p>
              <p>chilli powder:-{receipe?.ingrediantPowder}gms</p>

              <div className="d-flex align-items-center justify-content-between">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    handleEdit(receipe);
                  }}
                >
                  <small> Edit Recipe</small>
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => handleDelete(receipe.id)}
                >
                  <small>Delete Recipe</small>
                </button>
              </div>
            </div>

            {/* {showModal && (
              <RecipeModal
                receipe={receipe}
                id={selecetdReceipe.id}
                showModal={showModal}
                setShowModal={setShowModal}
                receipeName={selecetdReceipe.receipeName}
                receipeDes={receipe?.receipeDes}
                ingrediantOil={receipe?.ingrediantOil}
                ingrediantSalt={receipe?.ingrediantSalt}
                ingrediantPowder={receipe?.ingrediantPowder}
                setIngrediantPowder={setIngrediantPowder}
                setIngrediantSalt={setIngrediantSalt}
                setIngrediantOil={setIngrediantOil}
                setReceipeDes={setReceipeDes}
                setReceipeName={setReceipeName}
              />
            )} */}
          </div>
        ))}
      </div>

      <div className="d-flex align-items-center justify-content-between my-3">
        <div>
          <h5>List Of All Favorite Receipes</h5>
        </div>
        <p></p>
      </div>

      <div className="recipeCards">
        {favorites.map((receipe) => (
          <div key={receipe.id}>
            <div className="eachCard p-2">
              <div className="d-flex align-items-center justify-content-between my-3">
                <h5 className="d-flex align-items-center justify-content-center">
                  <b>{receipe.receipeName}</b>
                </h5>
                <div>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      handleUnFavorite(receipe);
                    }}
                  >
                    Remove Favorite
                  </button>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={
                    receipe.imageLink
                      ? receipe.imageLink
                      : `https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000`
                  }
                  alt="recipeImage"
                  className="recipeImage"
                />
              </div>

              <p>
                <small>{receipe.receipeDes}</small>
              </p>
              <h6>Recipe Ingrediants:-</h6>
              <p>salt:-{receipe.ingrediantSalt}gms</p>
              <p>oil:-{receipe.ingrediantOil}ml</p>
              <p>chilli powder:-{receipe.ingrediantPowder}gms</p>

              <div className="d-flex align-items-center justify-content-between">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    handleEdit(receipe);
                    selecetdReceipe(receipe);
                  }}
                >
                  <small> Edit Recipe</small>
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => handleDelete(receipe.id)}
                >
                  <small>Delete Recipe</small>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" className="text-center my-2">
            Add Receipe
          </Typography>

          <TextField
            className="my-2 w-100"
            id="demo-helper-text-misaligned-no-helper"
            label="Receipe Name"
            onChange={(event) => {
              setReceipeName(event.target.value);
            }}
          />

          <TextField
            className="my-2 w-100"
            id="demo-helper-text-misaligned-no-helper"
            label="Recipe Description"
            onChange={(event) => {
              setReceipeDes(event.target.value);
            }}
          />

          <Typography className="d-flex align-items-center justify-content-center">
            Recipe Ingrediants:-
          </Typography>

          <TextField
            className="my-2 w-100"
            id="demo-helper-text-misaligned-no-helper"
            hintText="Password"
            label="Oil"
            onChange={(event) => {
              setIngrediantOil(event.target.value);
            }}
          />

          <TextField
            className="my-2 w-100"
            id="demo-helper-text-misaligned-no-helper"
            label="Salt"
            onChange={(event) => {
              setIngrediantSalt(event.target.value);
            }}
          />

          <TextField
            className="my-2 w-100"
            id="demo-helper-text-misaligned-no-helper"
            label="Chilli Powder"
            onChange={(event) => {
              setIngrediantPowder(event.target.value);
            }}
          />

          <Button
            variant="contained"
            color="success"
            className="w-100 my-2 mb-3 py-2"
            onClick={handleRecipe}
          >
            Submit
          </Button>
        </Box>
      </Modal>

      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" className="text-center my-2">
            Edit Receipe
          </Typography>

          <TextField
            className="my-2 w-100"
            id="demo-helper-text-misaligned-no-helper"
            label="Receipe Name"
            // value={receipeName ? receipeName : ""}
            onChange={(event) => {
              setReceipeName(event.target.value);
            }}
          />

          <TextField
            className="my-2 w-100"
            id="demo-helper-text-misaligned-no-helper"
            label="Recipe Description"
            // value={receipeDes ? receipeDes : ""}
            onChange={(event) => {
              setReceipeDes(event.target.value);
            }}
          />

          <Typography className="d-flex align-items-center justify-content-center">
            Recipe Ingrediants:-
          </Typography>

          <TextField
            className="my-2 w-100"
            id="demo-helper-text-misaligned-no-helper"
            hintText="Password"
            label="Oil"
            // value={ingrediantOil ? ingrediantOil : ""}
            onChange={(event) => {
              setIngrediantOil(event.target.value);
            }}
          />

          <TextField
            className="my-2 w-100"
            id="demo-helper-text-misaligned-no-helper"
            label="Salt"
            // value={ingrediantSalt ? ingrediantSalt : ""}
            onChange={(event) => {
              setIngrediantSalt(event.target.value);
            }}
          />

          <TextField
            className="my-2 w-100"
            id="demo-helper-text-misaligned-no-helper"
            label="Chilli Powder"
            // value={ingrediantPowder ? ingrediantPowder : ""}
            onChange={(event) => {
              setIngrediantPowder(event.target.value);
            }}
          />

          <Button
            variant="contained"
            color="success"
            className="w-100 my-2 mb-3 py-2"
            onClick={() => {
              handleEditRecipe();
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Recipe;
