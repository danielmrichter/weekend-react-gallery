import { Delete, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Popover,
  Typography,
} from "@mui/material";
import Axios from "axios";
import { useState } from "react";
import ConfirmDeleteModal from "../Modals/ConfirmDeleteModal";
import SuccessfulDeleteAlert from "../Modals/SuccessfulDeleteAlert";

export default function GalleryItem({ item, getGallery }) {
  const [popoverStatus, setPopoverStatus] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAwaitingConfirmation, setIsAwaitingConfirmation] = useState(false);
  const [alertPopup, setAlertPopup] = useState(false);

  const handlePopover = (e) => {
    setPopoverStatus(!popoverStatus);
    setAnchorEl(e.currentTarget);
  };

  const handleLikeButton = () => {
    Axios.put(`/api/gallery/like/${item.id}`, { num: isFavorited ? -1 : 1 })
      .then((res) => {
        getGallery();
        setIsFavorited(!isFavorited);
      })
      .catch((err) => {
        console.log(`Error in PUT/api/gallery/like/:id!`, err);
      });
  };
  const onSuccessFnConfirmDelete = () => {
    setAlertPopup(true);
    setIsAwaitingConfirmation(false);
    getGallery();
  };

  const itemText = (
    <>
      <Typography textAlign="center" fontWeight="bold">
        {item.title}
      </Typography>
      <Typography>{item.description}</Typography>
    </>
  );
  const itemPicture = (
    <CardMedia
      component="img"
      src={item.url}
      loading="lazy"
      alt={item.title}
      sx={{
        boxShadow: 3,
      }}
    />
  );
  return (
    <>
      <ConfirmDeleteModal
        isAwaitingConfirmation={isAwaitingConfirmation}
        onSuccessFn={onSuccessFnConfirmDelete}
        onDeclineFn={() => {
          setIsAwaitingConfirmation(false);
        }}
        id={item.id}
      />
      <SuccessfulDeleteAlert
        alertPopup={alertPopup}
        onCloseFn={() => {
          console.log(`Closing Alert!`);
          setAlertPopup(false);
        }}
      />
      <Card sx={{ maxWidth: 300 }} raised={true}>
        <CardActionArea onClick={handlePopover} data-testid="toggle">
          {itemPicture}
        </CardActionArea>
        <Popover
          open={popoverStatus}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          elevation={1}
          onClose={() => {
            setPopoverStatus(!popoverStatus);
          }}
        >
          {itemText}
        </Popover>
        <CardActions>
          {isFavorited ? (
            <Favorite
              data-testid="like"
              onClick={handleLikeButton}
              color="primary"
            />
          ) : (
            <FavoriteBorder
              data-testid="like"
              onClick={handleLikeButton}
              color="primary"
            />
          )}
          <Typography>{item.likes}</Typography>
          <Delete
            onClick={() => {
              setIsAwaitingConfirmation(true);
            }}
          />
        </CardActions>
      </Card>
    </>
  );
}
