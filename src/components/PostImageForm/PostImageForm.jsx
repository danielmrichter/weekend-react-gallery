import { useState } from "react";
import Axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import './PostImageForm.css'

export default function PostImageForm() {
  const [titleInput, setTitleInput] = useState(``);
  const [descriptionInput, setDescriptionInput] = useState(``);
  const [imageInput, setImageInput] = useState(``);

  const handleFormSubmit = () => {
    Axios.post(`/api/gallery`, {
      title: titleInput,
      description: descriptionInput,
      url: imageInput,
    })
      .then((res) => {
        getGallery();
      })
      .catch((err) => {
        console.log(`Error posting form!`, err);
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        fullWidth
        variant="filled"
        required
        type="text"
        label="Title"
        margin="normal"
        value={titleInput}
        onChange={(e) => {
          setTitleInput(e.target.value);
        }}
      />
      <TextField
      fullWidth
      variant="filled"
        required
        type="text"
        label="Description"
        margin="normal"
        value={descriptionInput}
        onChange={(e) => {
          setDescriptionInput(e.target.value);
        }}
      />
      <TextField
      fullWidth
      variant="filled"
        required
        type="url"
        label="Image URL"
        margin="normal"
        value={imageInput}
        onChange={(e) => {
          setImageInput(e.target.value);
        }}
      />
      <Button variant="contained">Submit</Button>
    </form>
  );
}
