import {
  Table as MuiTable,
  TableContainer,
  Paper,
  TableCell,
} from "@mui/material";

import { TableHead } from "./style";

const sampleData = ["yeah", "yeah", "yeah"];

const Head = () => (
  <TableHead sx={{ backgroundColor: "#000000" }}>
    {/* {headData?.map((i) => (
      <TableCell key={i}>{i}</TableCell>
    ))} */}
    <TableCell>yeah</TableCell>
  </TableHead>
);

const Table = ({ children }) => (
  <TableContainer component={Paper}>
    <MuiTable>
      <Head headData={sampleData} />
      {children}
    </MuiTable>
  </TableContainer>
);

export default Table;
