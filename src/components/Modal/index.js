import { Modal, Typography, Box, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { ModalCard } from "./style";

const ModalWrapper = ({ children, title }) => (
  <Modal
    open
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <ModalCard>
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        <CloseIcon sx={{ cursor: "pointer" }} />
      </Box>
      <Divider />
      {children}
    </ModalCard>
  </Modal>
);

export default ModalWrapper;
