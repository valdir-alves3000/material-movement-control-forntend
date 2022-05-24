import { styled } from "@mui/material";

const FooterContainer = styled("footer")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  height: "50px",
  background: theme.palette.primary.light,
}));

export { FooterContainer };
