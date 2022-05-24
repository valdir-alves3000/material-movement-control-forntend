import { Button, styled } from "@mui/material";

const AppButtonStyled = styled(Button)(({ theme }) => ({
  display: "inline-block",
  minWidth: "250px",
  height: theme.spacing(5),
  margin: theme.spacing(1.5),
  padding: "0.5rem 3.5rem",
  fontSize: theme.spacing(1.7),
  color: "#fff",
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    opacity: 0.8,
  },
}));

export { AppButtonStyled };
