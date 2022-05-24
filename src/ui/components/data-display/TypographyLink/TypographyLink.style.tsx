import { styled, Typography } from "@mui/material";

const TypographyLinkStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  borderRadius: "3px",
  cursor: "pointer",
  opacity: 0.7,
  padding: theme.spacing(1),
  "&:hover": {
    opacity: 1,
    textDecoration: "underline",
  },
}));

export { TypographyLinkStyled };
