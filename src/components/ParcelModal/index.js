import { ModalWrapper } from "components";

import {
  Typography,
  Divider,
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const PersonalInfo = ({ title }) => (
  <>
    <Grid item md={12}>
      <Typography variant="h5" component="h5">
        {title}
      </Typography>
    </Grid>
    <Grid item md={6}>
      <TextField sx={{ width: "100%" }} label="Full name" size="small" />
    </Grid>
    <Grid item md={6}>
      <TextField sx={{ width: "100%" }} label="Contact number" size="small" />
    </Grid>
    <Grid item md={12}>
      <TextField sx={{ width: "100%" }} label="Address" size="small" />
    </Grid>
  </>
);

const ParcenInfo = () => (
  <>
    <Grid item md={12}>
      <Typography variant="h5" component="h5">
        Parcel Information
      </Typography>
    </Grid>
    <Grid item md={3}>
      <TextField sx={{ width: "100%" }} label="Item Description" size="small" />
    </Grid>
    <Grid item md={3}>
      <TextField sx={{ width: "100%" }} label="Declared value" size="small" />
    </Grid>
    <Grid item md={3}>
      <TextField sx={{ width: "100%" }} label="COD Amount" size="small" />
    </Grid>
    <Grid item md={3}>
      <TextField sx={{ width: "100%" }} label="Status" size="small" />
    </Grid>
    <Grid item md={3}>
      <TextField
        sx={{ width: "100%" }}
        label="No. of items"
        size="small"
        disabled
      />
    </Grid>
    <Grid item md={3}>
      <TextField sx={{ width: "100%" }} label="Total weight" size="small" />
    </Grid>
    <Grid item md={3}>
      <TextField sx={{ width: "100%" }} label="Volume weight" size="small" />
    </Grid>
    <Grid item md={3}>
      <TextField sx={{ width: "100%" }} label="Chargable weight" size="small" />
    </Grid>
  </>
);

const Dimensions = () => (
  <>
    <Grid item md={6}>
      <Typography variant="h5" component="h5">
        Dimension
      </Typography>
    </Grid>
    <Grid item md={6}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100%",
        }}
      >
        <AddCircleIcon sx={{ cursor: "pointer", color: "rgb(33, 150, 243)" }} />
      </Box>
    </Grid>
    <Grid item md={12}>
      <Box sx={{ display: "flex" }}>
        <TextField sx={{ width: "100%", mr: 1 }} variant="standard" label="L" />
        <TextField sx={{ width: "100%", mr: 1 }} variant="standard" label="W" />
        <TextField sx={{ width: "100%" }} variant="standard" label="H" />
        <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
          <DeleteIcon sx={{ color: "#ba000d", cursor: "pointer" }} />
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <TextField sx={{ width: "100%", mr: 1 }} variant="standard" label="L" />
        <TextField sx={{ width: "100%", mr: 1 }} variant="standard" label="W" />
        <TextField sx={{ width: "100%" }} variant="standard" label="H" />
        <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
          <DeleteIcon sx={{ color: "#ba000d", cursor: "pointer" }} />
        </Box>
      </Box>
    </Grid>
  </>
);

const ParcelModal = ({ title, onSave }) => (
  <ModalWrapper title={title}>
    <Box sx={{ p: 4, overflowY: "auto", height: 400 }}>
      <Grid container spacing={2}>
        <PersonalInfo title="Sender Information" />
        <PersonalInfo title="Consignee" />
        <ParcenInfo />
        <Dimensions />
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
export default ParcelModal;
