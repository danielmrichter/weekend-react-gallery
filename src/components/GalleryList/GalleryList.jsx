import GalleryItem from "../GalleryItem/GalleryItem"
export default function GalleryList({gallery, getGallery}) {
    return (
        gallery.map(item => <GalleryItem key={item.id} item={item} getGallery={getGallery}/>)
    )
}