import { LayoutContainer, LayoutStyled } from "@components/Layout/Layout.style";
import { ThemeProvider } from "@mui/material";
import { AppContext, AppProvider } from "contexts/AppContext";
import { ILayout } from "data/types/IApp";
import { useContext } from "react";
import { darkTheme, lightTheme } from "ui/themes/themes";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

const Layout = ({ children }: ILayout) => {
  const { dark } = useContext(AppContext);

  return (
    <AppProvider>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <LayoutStyled>
          <Header />
          <LayoutContainer>{children}</LayoutContainer>
          <Footer />
        </LayoutStyled>
      </ThemeProvider>
    </AppProvider>
  );
};

export { Layout };
