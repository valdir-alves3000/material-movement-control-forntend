import { Container, styled } from "@mui/material";

const LayoutStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100vw",
  background: theme.palette.primary.dark,
}));

const LayoutContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 140px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#dcdce6",
}));

export { LayoutStyled, LayoutContainer };
