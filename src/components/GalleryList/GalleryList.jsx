import { Grid } from "@mui/material";
import GalleryItem from "../GalleryItem/GalleryItem";
import { useState } from "react";
import SuccessfulDeleteAlert from "../Modals/SuccessfulDeleteAlert";

export default function GalleryList({ gallery, getGallery }) {
  const [alertPopup, setAlertPopup] = useState(false);
  return (
    <>
    <SuccessfulDeleteAlert alertPopup={alertPopup} onCloseFn={() => setAlertPopup(false)}/>
      <Grid
        container={true}
        justifyContent="center"
        alignItems="baseline"
        sx={{ mt: 5, ml: 0, py: 5 }}
        spacing={3}
        columnGap={3}
        rowGap={2}
      >
        {gallery.map((item) => (
          <GalleryItem
           key={item.id} 
           item={item} 
           getGallery={getGallery} 
           alertPopup={alertPopup}
           setAlertPopup={setAlertPopup}/>
        ))}
      </Grid>
    </>
  );
}
