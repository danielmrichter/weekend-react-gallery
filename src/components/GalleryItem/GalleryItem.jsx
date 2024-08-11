import { Delete, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Alert,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Popover,
  Snackbar,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
} from "@mui/material";
import Axios from "axios";
import { useState } from "react";

export default function GalleryItem({ item, getGallery }) {
  const [popoverStatus, setPopoverStatus] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAwaitingConfirmation, setIsAwaitingConfirmation] = useState(false);
  const [alertPopup, setAlertPopup] = useState(false);
  // need state to track the successModal

  const handlePopover = (e) => {
    setPopoverStatus(!popoverStatus);
    setAnchorEl(e.currentTarget);
  };
  const deleteItem = () => {
    Axios.delete(`/api/gallery/${item.id}`)
      .then((res) => {
        getGallery();
        setAlertPopup(true);
        setIsAwaitingConfirmation(false);
      })
      .catch((err) => {
        console.log(`Error deleting item:`, err);
      });
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
      <Dialog
        open={isAwaitingConfirmation}
        onClose={() => {
          setIsAwaitingConfirmation(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you would like to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsAwaitingConfirmation(false);
            }}
          >
            Disagree
          </Button>
          <Button onClick={deleteItem} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={alertPopup}
        onClose={() => {
          setAlertPopup(false);
        }}
        autoHideDuration={10000}
        anchorOrigin={{ horizontal: "center", vertical: "center" }}
      >
        <Alert
          open={alertPopup}
          onClose={() => {
            setAlertPopup(false);
          }}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Item Successfully deleted.
        </Alert>
      </Snackbar>
      {/* <UserConfirmDeleteModal
          onDeclineFn={() => {
            setIsAwaitingConfirmation(false);
          }}
          onSuccessFn={onSuccessFn}
          id={item.id}
          isAwaitingConfirmation={isAwaitingConfirmation} /> */}
    </Card>
  );
}
