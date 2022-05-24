import { AppBar, styled } from "@mui/material";

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  ".MuiTypography-root, .MuiSvgIcon-root": {
    color: theme.palette.text.primary,
  },
}));

export { HeaderAppBar };
