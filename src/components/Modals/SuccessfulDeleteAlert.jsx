import { Alert, Snackbar, SnackbarContent } from "@mui/material";
import { useEffect } from "react";

export default function SuccessfulDeleteAlert({ alertPopup, onCloseFn }) {
  useEffect(() => {
    console.log(`alertPopup status is: `, alertPopup);
  }, []);
  return (
    <Snackbar onClose={() => onCloseFn} open={alertPopup}>
      <SnackbarContent>
        <Alert severity="success">
          Item Successfully deleted.
        </Alert>
      </SnackbarContent>
    </Snackbar>
  );
}
