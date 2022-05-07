import { TypographyLink } from "@components/data-display/TypographyLink";
import { Box, Container, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { HeaderAppBar } from "@styles/components/Layout/Header.style";
import { AppContext } from "contexts/AppContext";
import { useRouter } from "next/router";
import { useContext } from "react";

const Header = () => {
  const router = useRouter();
  const { dark, handleSetDark } = useContext(AppContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderAppBar position="sticky">
        <Toolbar component={Container}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            De Olho na Validade
          </Typography>
          <TypographyLink href="/users/home" text="Home" />
          <TypographyLink href="/" text="Login" />
          <TypographyLink href="/users/create_user" text="Cadastro" />
        </Toolbar>
      </HeaderAppBar>
    </Box>
  );
};

export { Header };
