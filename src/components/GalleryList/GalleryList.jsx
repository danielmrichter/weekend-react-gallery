import { Box, Grid } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import GalleryItem from "../GalleryItem/GalleryItem"

export default function GalleryList({ gallery, getGallery }) {
    return (
        // <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }} data-testid="galleryList">
        <Grid2 container={true} justifyContent="center" alignItems='baseline'
            sx={{ bgcolor: 'primary.main' }} spacing={2}>
            {gallery.map(item => <GalleryItem
                key={item.id}
                item={item}
                getGallery={getGallery}
            />)}
        </Grid2>
        // </Box>
    )
}