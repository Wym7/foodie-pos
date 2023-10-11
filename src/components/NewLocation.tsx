import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const NewLocation = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Create new location</DialogTitle>
      <DialogContent>
        <h1>New location form...</h1>
      </DialogContent>
    </Dialog>
  );
};

export default NewLocation;
