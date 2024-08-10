import Axios from "axios";
import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList";
import PostImageForm from "../PostImageForm/PostImageForm";
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
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>
        <PostImageForm getGallery={getGallery}/>
        <p>The gallery goes here!</p>
        <GalleryList gallery={gallery} getGallery={getGallery}/>
      </div>
    );
}

export default App;
