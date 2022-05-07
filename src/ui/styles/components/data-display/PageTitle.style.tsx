import { styled } from "@mui/material";

const PageTitleStyled = styled("h2")(({ theme }) => ({
  margin: theme.spacing(3),
  color: theme.palette.text.secondary,
  fontSize: theme.typography.h5.fontSize,
  fontWeighteight: 600,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export { PageTitleStyled };
