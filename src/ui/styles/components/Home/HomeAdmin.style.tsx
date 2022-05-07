import { Grid, styled } from "@mui/material";

const AdminBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  ".MuiBox-root": {
    borderRadius: "5px",
    boxShadow: "0px 30px 40px -20px hsl(229, 6%, 66%)",
    padding: "30px",
    margin: "20px",
    width: "280px",
    background: theme.palette.primary.light,
  },
}));

export { AdminBox };
