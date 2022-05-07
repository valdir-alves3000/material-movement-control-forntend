import { PageTitleStyled } from "@styles/components/data-display/PageTitle.style";
import { IPageTitle } from "data/types/IAppContext";

const PageTitle = ({ title }: IPageTitle) => {
  return <PageTitleStyled>{title}</PageTitleStyled>;
};

export { PageTitle };
