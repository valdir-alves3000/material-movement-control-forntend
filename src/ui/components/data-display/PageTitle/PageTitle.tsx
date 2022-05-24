import { IPageTitle } from "data/types/IAppContext";
import { PageTitleStyled } from "./PageTitle.style";

const PageTitle = ({ title }: IPageTitle) => {
  return <PageTitleStyled>{title}</PageTitleStyled>;
};

export { PageTitle };
