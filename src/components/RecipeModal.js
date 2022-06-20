import React from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "@mui/base";
import { editReceipe } from "../redux/actions/recipeAction";

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

function RecipeModal({
  receipeName,
  receipe,
  id,
  receipeDes,
  ingrediantOil,
  ingrediantSalt,
  ingrediantPowder,
  setIngrediantPowder,
  setIngrediantSalt,
  setIngrediantOil,
  setReceipeDes,
  setReceipeName,
  showModal,
  setShowModal,
}) {
  const dispatch = useDispatch();
  const handleEditRecipe = () => {
    console.log("id is", id);
    dispatch(editReceipe(id, receipeName));
  };

  return (
    <>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
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
    </>
  );
}

export default RecipeModal;
