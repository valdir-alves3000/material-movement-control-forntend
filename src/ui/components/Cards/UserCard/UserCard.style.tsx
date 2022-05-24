import { styled } from "@mui/material";

const UserCardContainer = styled("div")(({ theme }) => ({
  width: "200px",
  height: "200px",
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.spacing(1.5),
  textAlign: "center",
  boxShadow: theme.shadows,

  "&::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    borderRadius: theme.spacing(1.5),
    clipPath:
      "polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%)",
    width: "100%",
    height: "70%",
    backgroundColor: "#ff62b299",
  },

  "& .MuiTypography-root": {
    position: "absolute",
    left: "50%",
    bottom: theme.spacing(2),
    transform: "translateX(-50%)",
    color: theme.palette.text.primary,
  },
}));

export { UserCardContainer };
