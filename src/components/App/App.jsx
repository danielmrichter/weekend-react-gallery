import Axios from "axios";
import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList";
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

        <p>The gallery goes here!</p>
        <GalleryList gallery={gallery} />
      </div>
    );
}

export default App;
