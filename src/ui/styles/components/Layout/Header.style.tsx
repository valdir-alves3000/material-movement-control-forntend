import { AppBar, Menu, styled } from "@mui/material";

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  ".MuiSvgIcon-root, .MuiTypography-root": {
    color: theme.palette.text.primary,
  },
}));

const MenuStyled = styled(Menu)(({ theme }) => ({
  ".MuiPaper-root": {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
    minWidth: "150px",
  },
  ".MuiSvgIcon-root": {
    color: theme.palette.text.secondary,
  },
  ".MuiTypography-root": {
    color: theme.palette.text.primary,
  },
}));

export { HeaderAppBar, MenuStyled };
