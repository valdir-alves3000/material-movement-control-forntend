import { Card, Container, styled } from "@mui/material";

const ProductContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "100vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const ProductCard = styled(Card)(({ theme }) => ({
  width: "300px",
  padding: `0 ${theme.spacing(3)} ${theme.spacing(3)}`,
  textTransform: "capitalize",
  boxShadow: theme.shadows,

  "& p": {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body2.fontSize,
    textAlign: "justify",
    padding: "5px 0",
    marginTop: theme.spacing(2),
  },

  "& span": {
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
  },
}));

export { ProductCard, ProductContainer };
