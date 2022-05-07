import { Avatar, Grid, styled } from "@mui/material";

const SignInContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(3),
  "& img": {
    width: "350px",
    opacity: 0.5,
    margin: theme.spacing(4),
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    "& img": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-54%,-54%)",
      margin: theme.spacing(1),
      opacity: 0.15,
    },
  },
}));

const SignInAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  width: "55px",
  height: "55px",
}));

const SignInGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows,
  padding: theme.spacing(5),

  backgroun: theme.palette.primary.light,

  "& .MuiOutlinedInput-root": {
    marginBottom: theme.spacing(2),
  },
}));

export { SignInContainer, SignInGrid, SignInAvatar };
