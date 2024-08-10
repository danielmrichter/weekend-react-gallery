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
                <div data-testid="galleryItem">
                    <p>{item.title}</p>
                    <p onClick={() => setFlipImage(!flipImage)}
                        data-testid="toggle">{item.description}</p>
                    <p>Likes: {item.likes}</p>
                    <button data-testid="like" onClick={handleLikeButton}>Heart</button>
                </div> : <div data-testid="galleryItem">
                    <p>{item.title}</p>
                    <img
                        onClick={() => setFlipImage(!flipImage)}
                        src={item.url}
                        data-testid="toggle" />
                    <p>Likes: {item.likes}</p>
                    <button data-testid="like" onClick={handleLikeButton}>Heart</button>
                </div>}
        </>
    )
}
