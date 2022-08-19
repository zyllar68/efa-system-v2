import { Sidebar } from "components";
import { Settings } from "pages";
import { Box } from "@mui/material";

const drawerWidth = 240;

const App = () => (
  <Box sx={{ display: "flex" }}>
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Sidebar drawerWidth={drawerWidth} />
    </Box>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 4,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Settings />
    </Box>
  </Box>
);

export default App;
