import { TypographyLinkStyled } from "@styles/components/data-display/TypographyLink.style";
import Link from "next/link";

interface ITypographyLink {
  text: string;
  href: string;
}

const TypographyLink = ({ text, href }: ITypographyLink) => {
  return (
    //  eslint-disable-next-line @next/next/link-passhref
    <Link href={href}>
      <TypographyLinkStyled>{text}</TypographyLinkStyled>
    </Link>
  );
};

export { TypographyLink };
