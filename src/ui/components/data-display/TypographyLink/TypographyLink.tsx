import { ITypographyLink } from "data/types/IApp";
import Link from "next/link";
import { TypographyLinkStyled } from "./TypographyLink.style";

const TypographyLink = ({ text, href }: ITypographyLink) => {
  return (
    //  eslint-disable-next-line @next/next/link-passhref
    <Link href={href}>
      <TypographyLinkStyled>{text}</TypographyLinkStyled>
    </Link>
  );
};

export { TypographyLink };
