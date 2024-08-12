import { Alert, Snackbar } from "@mui/material";

export default function SuccessfulDeleteAlert({ alertPopup, onCloseFn }) {
  return (
    <Snackbar onClose={onCloseFn} open={alertPopup} autoHideDuration={5000}>
        <Alert severity="success" onClose={onCloseFn}>
          Item Successfully deleted.
        </Alert>
    </Snackbar>
  );
}
