import { styled } from "@mui/material";

const AppTable = styled("table")(() => ({
  display: "block",
  width: "100%",
  borderSpacing: "0 0.5rem",
  color: "#969cb3",

  overflowY: "auto",

  "& thead tr th:first-child, table tbody tr td:first-child": {
    borderRadius: "0.25rem 0 0 0.25rem",
  },

  "& thead tr th:last-child, table tbody tr td:last-child": {
    borderRadius: "0 0.25rem 0.25rem 0",
  },
}));

const AppTableTh = styled("th")(() => ({
  width: "100%",
  background: "#fff",

  fontWeight: "normal",
  padding: "1rem 2rem",

  textAlign: "left",
}));

const AppTableBodyTr = styled("tr")(() => ({
  opacity: 0.7,
  textAlign: "left",

  "&:hover": {
    opacity: 1,
  },
}));

const AppTableTd = styled("td")(() => ({
  background: "#fff",
  padding: "1rem 2rem",
}));

export { AppTable, AppTableBodyTr, AppTableTd, AppTableTh };
