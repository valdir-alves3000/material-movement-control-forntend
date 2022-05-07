import { CircularProgress, Typography } from "@mui/material";
import { AppButtonStyled } from "@styles/components/AppButton.style";
import { IAppButton } from "data/types/IAppContext";

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
