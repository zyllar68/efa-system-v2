import { Typography, TextField, Box, Button } from "@mui/material";

import { Table, ParcelModal } from "components";

const statusList = [
  { value: "on_delivery", status: "On Delivery" },
  { value: "delivered", status: "Delivered" },
  { value: "pending", status: "Pending" },
  { value: "hal;", status: "Hal" },
];

const Parcels = () => (
  <div>
    <Typography sx={{ mt: 3 }} variant="h4">
      Parcels
    </Typography>
    <Box sx={{ mt: 7, display: "flex", justifyContent: "space-between" }}>
      <Box>
        <TextField
          size="small"
          sx={{ mr: 4, width: 220 }}
          label="Search Parcel"
        />
        <TextField
          select
          size="small"
          label="Status"
          sx={{ width: 220 }}
          SelectProps={{
            native: true,
          }}
          value="On Delivery"
        >
          {statusList.map(({ value, status }) => (
            <option key={value}>{status}</option>
          ))}
        </TextField>
      </Box>
      <Box>
        <Button variant="contained">Add Parcel</Button>
      </Box>
    </Box>
    <Box>
      <Table />
    </Box>
    <ParcelModal title="Add Parcel" />
  </div>
);

export default Parcels;
