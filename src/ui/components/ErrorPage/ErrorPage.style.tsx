import { styled, Typography } from "@mui/material";

const ErrorContainer = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  background: `url('../../assets/p404.png') #151729`,
  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ErrorContent = styled("div")(({ theme }) => ({
  maxWidth: "600px",
  textAlign: "center",
}));

const ErrorH2 = styled("h2")(({ theme }) => ({
  fontSize: "25vw",
  color: "#fff",
  lineHeight: "1em",
}));

const ErrorH4 = styled("h2")(({ theme }) => ({
  fontSize: "1.5em",
  marginBottom: "20px",
  color: "#222",
  background: "#fff",
  fontWeight: 300,
  padding: "10px 20px",
  display: "inline-block",
  borderRadius: theme.spacing(0.5),
}));

const ErrorText = styled("p")(({ theme }) => ({
  color: "#fff",
  fontSize: "1.2em",
}));

const ErrorBack = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  padding: "10px 25px",
  background: "#ff0562",

  color: "#fff",
  marginTop: "25px",
  borderRadius: "25px",
  borderBottom: "4px solid #d00d56",
  cursor: "pointer",
}));

export { ErrorContainer, ErrorContent, ErrorH2, ErrorH4, ErrorText, ErrorBack };
