import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import Axios from "axios";

export default function ConfirmDeleteModal({ onSuccessFn, id, onDeclineFn, isAwaitingConfirmation }) {
  const deleteItem = () => {
    Axios.delete(`/api/gallery/${id}`)
      .then((res) => {
        onSuccessFn();
      })
      .catch((err) => {
        console.log(`Error deleting item:`, err);
      });
  };

  return (
    <Dialog
      open={isAwaitingConfirmation}
      onClose={onDeclineFn}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you would like to delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDeclineFn}>No</Button>
        <Button onClick={deleteItem} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
