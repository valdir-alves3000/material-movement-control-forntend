import { Container, styled } from "@mui/material";
import { Box } from "@mui/system";

const QRContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(5),
}));

const QRBox = styled(Box)(({ theme }) => ({
  width: "180px",
  height: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(1),

  boxShadow: theme.shadows,
  backgroundSize: "cover",
  backgroundImage:
    "url('https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=996&t=st=1651278203~exp=1651278803~hmac=248dc89bdf77497a4a17619d38e64dc78a0ce109c3652ee0d94a91af39d8b0e9')",

  "& .MuiTypography-root": {
    color: "#fff",
  },

  "& .MuiTypography-root:nth-child(2)": {
    fontSize: theme.typography.body2.fontSize,
  },

  "& > img": {
    marginTop: theme.spacing(2),
    width: "100px",
    borderRadius: "7px",
  },

  "&:nth-child(2) ": {
    width: "400px",
  },
}));

export { QRContainer, QRBox };
