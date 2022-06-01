import { CircularProgress, Typography } from "@mui/material";
import { IAppButton } from "data/types/IApp";
import { AppButtonStyled } from "./AppButton.style";

const AppButton = ({ text, onClick, disabled, loading }: IAppButton) => {
  return (
    <AppButtonStyled disabled={disabled} onClick={onClick}>
      {loading ? (
        <CircularProgress color="info" size={25} />
      ) : (
        <Typography>{text}</Typography>
      )}
    </AppButtonStyled>
  );
};

export { AppButton };
