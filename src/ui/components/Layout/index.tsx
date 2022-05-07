import { ThemeProvider } from "@mui/material";
import {
  LayoutContainer,
  LayoutStyled,
} from "@styles/components/Layout/Layout.style";
import { AppContext } from "contexts/AppContext";
import { ILayout } from "data/types/IAppContext";
import { useContext } from "react";
import { darkTheme, lightTheme } from "ui/themes/themes";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }: ILayout) => {
  const { dark } = useContext(AppContext);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <LayoutStyled>
        <Header />
        <LayoutContainer>{children}</LayoutContainer>
        <Footer />
      </LayoutStyled>
    </ThemeProvider>
  );
};

export { Layout };
