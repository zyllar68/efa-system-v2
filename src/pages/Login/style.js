import { CardContent as Content, Divider as Divide } from "@mui/material";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  background-color: hsl(213, 54%, 52%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  padding: 3rem;
`;

export const CardContent = styled(Content)`
  display: flex;
  flex-direction: row;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const Divider = styled(Divide)`
  @media (max-width: 660px) {
    display: none !important;
  }
`;
