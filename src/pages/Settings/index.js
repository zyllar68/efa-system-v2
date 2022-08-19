import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";

import { Table, AccountModal } from "components";

const Settings = () => (
  <Box>
    <Box>
      <Typography variant="h4" component="h4">
        Settings
      </Typography>
    </Box>
    <Box sx={{ mt: 10, mb: 5 }}>
      <Typography variant="h5" sx={{ mb: 4 }} component="h5">
        Admin Account
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <TextField
            size="small"
            sx={{ width: "100%", backgroundColor: "#fff" }}
            label="Username"
          />
        </Grid>
        <Grid item md={5}>
          <TextField
            size="small"
            sx={{ width: "100%", backgroundColor: "#fff" }}
            label="password"
          />
        </Grid>
        <Grid item md={2}>
          <Button sx={{ width: "100%" }} variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
    <Divider />
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" component="h5">
        User Account
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
        <TextField
          sx={{ backgroundColor: "#fff", width: 500 }}
          size="small"
          label="Search account"
        />
        <Button sx={{}} variant="contained">
          Add
        </Button>
      </Box>
      <Table />
    </Box>
    <AccountModal />
  </Box>
);

export default Settings;
