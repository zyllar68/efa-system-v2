import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
// icons
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

// image
import Logo from "assets/images/logo.jpg";

const Sidebar = ({ drawerWidth }) => (
      <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: "#1769aa",
        },
      }}
      sx={{
        color: "#000000",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img style={{ width: 90, height: 90 }} alt="logo" src={Logo} />
        <Typography component="h1" variant="h4" sx={{ mt: 1.5, color: "#fff" }}>
          EFA
        </Typography>
        <Typography sx={{ color: "#fff" }}>Tracking System</Typography>
      </Box>
      <Box>
        <List>
          <ListItem
            sx={{
              p: 0,
              "& .MuiListItemButton-root:hover": { backgroundColor: "#4dabf5" },
            }}
          >
            <ListItemButton sx={{ p: 2 }}>
              <ListItemIcon>
                <Inventory2Icon sx={{ color: "#fff", mr: 1 }} />
                <Typography
                  variant="subtitle1"
                  component="subtitle1"
                  sx={{ color: "#fff" }}
                >
                  Parcel
                </Typography>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              p: 0,
              "& .MuiListItemButton-root:hover": { backgroundColor: "#4dabf5" },
            }}
          >
            <ListItemButton sx={{ p: 2 }}>
              <ListItemIcon>
                <SettingsIcon sx={{ color: "#fff", mr: 1 }} />
                <Typography
                  variant="subtitle1"
                  component="subtitle1"
                  sx={{ color: "#fff" }}
                >
                  Settings
                </Typography>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              p: 0,
              position: "fixed",
              bottom: 0,
              width: drawerWidth,
              "& .MuiListItemButton-root:hover": { backgroundColor: "#4dabf5" },
            }}
          >
            <ListItemButton sx={{ p: 2 }}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: "#fff", mr: 1 }} />
                <Typography
                  variant="subtitle1"
                  component="subtitle1"
                  sx={{ color: "#fff" }}
                >
                  Logout
                </Typography>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
);

export default Sidebar;
