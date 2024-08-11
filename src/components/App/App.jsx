import Axios from "axios";
import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList";
import PostImageForm from "../PostImageForm/PostImageForm";
import { Container, Typography } from "@mui/material";
function App() {
  useEffect(() => {
    getGallery()
  }, [])
  const [gallery, setGallery] = useState([])
  const getGallery = () => {
    Axios.get(`/api/gallery`)
    .then(res => {setGallery(res.data)})
    .catch(err => {console.log(`Error in GET/api/gallery!`, err)})
  }
    return (
      <Container data-testid="app">
        <header>
          <Typography varient="h1" sx={{textAlign: 'center', color:'primary.main'}}>A Moody Gallery</Typography>
        </header>
        <PostImageForm sx={{bgcolor: 'primary.secondary'}} getGallery={getGallery}/>
        <Typography varient="h2">Gallery</Typography>
        <GalleryList gallery={gallery} getGallery={getGallery}/>
      </Container>
    );
}

export default App;
