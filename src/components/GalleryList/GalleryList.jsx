import GalleryItem from "../GalleryItem/GalleryItem"
export default function GalleryList({gallery}) {
    return (
        gallery.map(image => <GalleryItem image={image}/>)
    )
}