import { TypographyLink } from "@components/data-display/TypographyLink/TypographyLink";
import { HeaderAppBar } from "@components/Layout/Header/Header.style";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import { Box, Container, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AppContext } from "contexts/AppContext";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext } from "react";

const Header = () => {
  const router = useRouter();
  const { dark, handleSetDark, toggleToken, token } = useContext(AppContext);

  return (
    <Box>
      <HeaderAppBar position="sticky">
        <Toolbar component={Container}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            De Olho na Validade
          </Typography>
          <TypographyLink href="/users/home" text="Home" />
          <TypographyLink href="/" text="Login" />
          <TypographyLink href="/users/create_user" text="Cadastro" />
          <IconButton onClick={handleSetDark}>
            {dark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>
          <IconButton
            onClick={() => {
              toggleToken("");
              Cookies.remove("token");
              router.push("/");
            }}
          >
            {token && <PowerSettingsNewOutlinedIcon />}
          </IconButton>
        </Toolbar>
      </HeaderAppBar>
    </Box>
  );
};

export { Header };
