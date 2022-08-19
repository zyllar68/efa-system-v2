import { Box, Grid, Divider, Button, TextField } from "@mui/material";
import ModalWrapper from "components/Modal";

const AccountModal = ({ onSave }) => (
  <ModalWrapper title="Add User">
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <TextField sx={{ width: "100%" }} size="small" label="Fullname" />
        </Grid>
        <Grid item md={6}>
          <TextField sx={{ width: "100%" }} size="small" label="Username" />
        </Grid>
        <Grid item md={6}>
          <TextField sx={{ width: "100%" }} size="small" label="Password" />
        </Grid>
      </Grid>
    </Box>
    <Divider />
    <Box sx={{ p: 2, textAlign: "right" }}>
      <Button variant="contained" onClick={onSave}>
        Save
      </Button>
    </Box>
  </ModalWrapper>
);

export default AccountModal;
