import { Container, styled } from "@mui/material";

const StoreProdutStyled = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& .MuiFormControl-root": {
    marginLeft: theme.spacing(0.5),
  },

  "& > img": {
    width: "400px",
    marginBottom: theme.spacing(3),
    opacity: 0.5,
  },
  "& > div": {
    width: "100%",
    display: "flex",
  },
  [theme.breakpoints.down("md")]: {
    "& > img": {
      width: "300px",
      margin: theme.spacing(2),
    },

    "& > div": {
      flexDirection: "column",
    },
    "& > div > button, & .MuiFormControl-root": {
      margin: 0,
      marginTop: theme.spacing(2),
    },
  },
}));

export { StoreProdutStyled };
