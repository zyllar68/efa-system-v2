import Logo from "assets/images/logo.jpg";
import { Card, Typography, TextField, Button } from "@mui/material";

import { LoginWrapper, ItemWrapper, CardContent, Divider } from "./style";

const index = () => (
  <LoginWrapper>
    <Card sx={{ display: "flex", padding: 1 }}>
      <CardContent>
        <ItemWrapper>
          <img style={{ width: 200, height: 200 }} alt="logo" src={Logo} />
        </ItemWrapper>
        <Divider orientation="vertical" />
        <ItemWrapper>
          <form>
            <Typography
              sx={{ fontWeight: 300, marginBottom: 3, textAlign: "center" }}
              variant="h4"
            >
              Login
            </Typography>
            <div style={{ marginBottom: 15 }}>
              <TextField size="small" variant="outlined" label="username" />
            </div>
            <div>
              <TextField
                size="small"
                variant="outlined"
                label="password"
                type="password"
              />
            </div>
            <Button
              loading
              sx={{ marginTop: 3, width: "100%" }}
              variant="contained"
            >
              Login
            </Button>
          </form>
        </ItemWrapper>
      </CardContent>
    </Card>
  </LoginWrapper>
);

export default index;
