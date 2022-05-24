import { ITypographyLink } from "data/types/IAppContext";
import Link from "next/link";
import { TypographyLinkStyled } from "./TypographyLink.style";

const TypographyLink = ({ text, href,icon }: ITypographyLink) => {
  return (
    //  eslint-disable-next-line @next/next/link-passhref
    <Link href={href}>
      
      <TypographyLinkStyled>{text}</TypographyLinkStyled>
    </Link>
  );
};

export { TypographyLink };
