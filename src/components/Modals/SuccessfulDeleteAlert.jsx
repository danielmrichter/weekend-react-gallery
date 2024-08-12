import { Alert, Snackbar } from "@mui/material";
import { useEffect } from "react";

export default function SuccessfulDeleteAlert({ alertPopup, setAlertPopup }) {
    useEffect(() => {console.log(`alertPopup status is: `, alertPopup)}, [])
  return (
    // <Snackbar 
    // open={alertPopup}
    // onClose={() => {
    //     setAlertPopup(false);
    //   }}
    // autoHideDuration={6000}
    // sx={{zIndex: 999}}
    // message='Item Deleted Successfully'
    // >
      <Alert
        onClose={() => {
          setAlertPopup(false);
        }}
        severity="success"
        open={alertPopup}
      >
        Item Successfully deleted.
      </Alert>
  );
}