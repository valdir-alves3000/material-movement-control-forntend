import { Box, Grid, styled } from "@mui/material";

const ExpirationDateContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(5),

  "& h3": {
    margin: theme.spacing(2),
    color: "#41414d",
  },

  "& a": {
    color: theme.palette.primary.main,
    opacity: 0.5,
  },

  "& a:hover": {
    opacity: 1,
  },
}));

const ExpirationDateGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ExpirationDateBox = styled(Box)(({ theme }) => ({
  width: "500px",
  borderRadius: theme.spacing(1),
  boxShadow: "2px 2px 7px rgba(0,0,0,0.5)",
  padding: `0 ${theme.spacing(3)} ${theme.spacing(3)}`,
  borderTop: "3px solid  #fcaf4a",

  background: "#fcaf4a37",
  "& .MuiTypography-root": {
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.text.secondary,
    paddingBottom: theme.spacing(1),
  },

  "& .MuiTypography-root span": {
    paddingLeft: theme.spacing(2),
    textAlign: "justify",
    fontSize: theme.typography.body1.fontSize,
  },
}));

export { ExpirationDateContainer, ExpirationDateGrid, ExpirationDateBox };
