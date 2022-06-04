import { IPageTitle } from "data/types/IApp";
import { PageTitleStyled } from "./PageTitle.style";

const PageTitle = ({ title }: IPageTitle) => {
  return <PageTitleStyled>{title}</PageTitleStyled>;
};

export { PageTitle };
