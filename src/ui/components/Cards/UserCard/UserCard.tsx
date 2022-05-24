import { TypographyLink } from "@components/data-display/TypographyLink/TypographyLink";
import { IUserCard } from "data/types/IAppContext";
import { UserCardContainer } from "./UserCard.style";

const UserCard = ({ title, icon, href }: IUserCard) => {
  return (
    <UserCardContainer>
      {icon}
      <TypographyLink href={href} text={title} />
    </UserCardContainer>
  );
};

export { UserCard };
