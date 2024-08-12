import { Grid } from "@mui/material"
import GalleryItem from "../GalleryItem/GalleryItem"

export default function GalleryList({ gallery, getGallery }) {
    return (
        <Grid container={true} justifyContent="center" alignItems='baseline'
            sx={{ mt: 5, ml: 0, py: 5}} 
            spacing={3}
            columnGap={3}
            rowGap={2}>
            {gallery.map(item => <GalleryItem
                key={item.id}
                item={item}
                getGallery={getGallery}
            />)}
        </Grid>
    )
}