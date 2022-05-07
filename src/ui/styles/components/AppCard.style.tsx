import { styled } from "@mui/material";

const AppCardContainer = styled("div")(({ theme }) => ({
  width: "300px",
  minHeight: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.primary.main}`,
  padding: "0" + theme.spacing(4),
  margin: "5px",
  background: theme.palette.primary.light,
  opacity: "0.8",

  "&:hover": {
    opacity: "1",
  },

  "& > svg": {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(10),
  },

  "& .MuiTypography-root": {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(2),
  },
}));

export { AppCardContainer };
