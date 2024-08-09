import { useState } from "react";
export default function GalleryItem({image}) {

    return(
        <>
            <img src={image.url}/>
        </>
    )
}
