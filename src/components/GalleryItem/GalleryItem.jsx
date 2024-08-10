import Axios from "axios";
import { useState } from "react";
export default function GalleryItem({ item, getGallery }) {
    const [flipImage, setFlipImage] = useState(false)
    const handleLikeButton = () => {
        Axios.put(`/api/gallery/like/${item.id}`)
            .then(res => { getGallery() })
            .catch(err => { console.log(`Error in PUT/api/gallery/like/:id!`, err) })
    }

    return (
        <>
            {flipImage ?
                <div>
                    <p onClick={() => setFlipImage(!flipImage)}>{item.description}</p>
                    <p>Likes: {item.likes}</p>
                    <button onClick={handleLikeButton}>Heart</button>
                </div> : <div>
                    <img 
                    onClick={() => setFlipImage(!flipImage)}
                    src={item.url} />
                    <p>Likes: {item.likes}</p>
                    <button onClick={handleLikeButton}>Heart</button>
                </div>}
        </>
    )
}
