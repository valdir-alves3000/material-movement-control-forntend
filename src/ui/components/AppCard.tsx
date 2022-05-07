import { Typography } from "@mui/material";
import { AppCardContainer } from "@styles/components/AppCard.style";
import { ReactNode } from "react";

interface IAppCard {
  title: string;
  icon: ReactNode;
}

const AppCard = ({ title, icon }: IAppCard) => {
  return (
    <AppCardContainer>
      <Typography>{title}</Typography>
      {icon}
    </AppCardContainer>
  );
};

export { AppCard };
