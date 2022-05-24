import { Container, styled } from "@mui/material";

const HomeUserContatiner = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": {
    width: "400px",
    opacity: 0.5,
    margin: theme.spacing(4),
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    "& img": {
      width: "200px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& img": {
      width: "100px",
    },
  },
}));

const HomeUserBox = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "& > button": {
    width: "80%",
  },
}));

export { HomeUserContatiner, HomeUserBox };
