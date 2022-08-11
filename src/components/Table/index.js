import {
  Table as MuiTable,
  TableContainer,
  Paper,
  TableCell,
} from "@mui/material";

import { TableHead } from "./style";

const Head = () => (
  <TableHead>
    <TableCell>yteah</TableCell>
    <TableCell>yteah</TableCell>
    <TableCell>yteah</TableCell>
  </TableHead>
);

const Table = () => (
  <TableContainer component={Paper}>
    <MuiTable>
      <Head />
    </MuiTable>
  </TableContainer>
);

export default Table;
