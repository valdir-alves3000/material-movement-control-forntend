import { styled } from "@mui/material";

const AppTable = styled("table")(({ theme }) => ({
  display: "block",
  width: "100%",
  borderSpacing: "0 0.5rem",
  color: theme.palette.text.secondary,
  overflowX: "auto",

  fontSize: theme.typography.body1.fontSize,
  "& thead tr th:first-child, & tbody tr td:first-child": {
    borderRadius: "0.25rem 0 0 0.25rem",
  },

  "& thead tr th:last-child, & tbody tr td:last-child": {
    borderRadius: "0 0.25rem 0.25rem 0",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
  },
}));

const AppTableTh = styled("th")(({ theme }) => ({
  background: theme.palette.primary.light,
  fontWeight: "normal",
  padding: "1rem 2rem",

  textAlign: "center",
}));

const AppTableBodyTr = styled("tr")(({ theme }) => ({
  background: theme.palette.primary.light,
  opacity: 0.7,
  textAlign: "center",

  "&:hover": {
    opacity: 1,
  },
}));

const AppTableTd = styled("td")(({ theme }) => ({
  background: theme.palette.primary.light,
  padding: "1rem 2rem",
}));

export { AppTable, AppTableBodyTr, AppTableTd, AppTableTh };
