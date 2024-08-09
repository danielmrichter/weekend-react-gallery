import Axios from "axios";
import { useState } from "react";
export default function GalleryItem({item, getGallery}) {
    // const [likeButton, setLikeButton] = useState(false)
    const handleLikeButton = () => {
        // setLikeButton(!likeButton)
        Axios.put(`/api/gallery/like/${item.id}`)
        .then(res => {getGallery()})
        .catch(err => {console.log(`Error in PUT/api/gallery/like/:id!`, err)})
    }

    return(
        <>
            <img src={item.url}/>
            <p>Likes: {item.likes}</p>
            <button onClick={handleLikeButton}>Heart</button>
        </>
    )
}
