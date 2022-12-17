import { Box, Grid, Paper as Papers, Typography } from "@mui/material";
import { Table } from "components";

const Paper = ({ status }) => (
  <Papers
    elevation={3}
    sx={{
      width: "100%",
      height: "250px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <Box>
      <Typography variant="h1">10</Typography>
      <Typography>{status}</Typography>
    </Box>
  </Papers>
);

const Dashboard = () => (
  <Box sx={{ mt: 0 }}>
    <Box sx={{ width: "100%" }}>
      <Box sx={{ m: 4, ml: 0 }}>
        <Typography variant="h4" component="h4">
          Dashboard
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Paper status="Pending" />
        </Grid>
        <Grid item md={3}>
          <Paper status="On delivery" />
        </Grid>
        <Grid item md={3}>
          <Paper status="Delivered" />
        </Grid>
        <Grid item md={3}>
          <Paper status="HAL" />
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ mt: 7 }}>
      <Table>yeah</Table>
    </Box>
  </Box>
);

export default Dashboard;
