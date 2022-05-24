import { Box, Grid, styled } from "@mui/material";

const ListProductContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
}));

const ListProductGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ListProductBox = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows,
  padding: `0 ${theme.spacing(3)} ${theme.spacing(3)}`,
  borderTop: "3px solid  hsl(34, 97%, 64%)",

  background: theme.palette.primary.light,
  "& .MuiTypography-root": {
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.text.secondary,
    paddingBottom: theme.spacing(1),
    textTransform: "capitalize",
  },

  "& .MuiTypography-root span": {
    position: "absolute",
    right: 0,
    fontSize: theme.typography.body1.fontSize,
  },
}));

export { ListProductContainer, ListProductGrid, ListProductBox };
