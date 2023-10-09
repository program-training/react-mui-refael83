import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalB() {
  const [open, setOpen] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(event.target.value);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(event.target.value);
  };

  return (
    <div>
      <TextField
        value={input1}
        onChange={handleChange1}
        sx={{
          backgroundColor: "lightBlue",
        }}
      ></TextField>
      <TextField
        value={input2}
        onChange={handleChange2}
        sx={{
          backgroundColor: "lightBlue",
        }}
      ></TextField>
      <br></br>
      <br></br>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {input1}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {input2}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
