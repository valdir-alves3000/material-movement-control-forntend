import { Link, Typography } from "@mui/material";
import { FooterContainer } from "@styles/components/Layout/Footer.style";

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/valdir-alves3000">
        Valdir Alves
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright />
    </FooterContainer>
  );
};

export { Footer };
