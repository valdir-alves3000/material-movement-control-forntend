import { AppButton } from "@components/AppButton/AppButton";
import { PageTitle } from "@components/data-display/PageTitle/PageTitle";
import { TextField } from "@mui/material";
import { SignInContext } from "contexts/SignInContext";
import { useContext } from "react";
import { SignInAvatar, SignInContainer, SignInGrid } from "./SignIn.style";

const SignIn = () => {
  const {
    loading,
    handleSignIn,
    disabled,
    name,
    password,
    setName,
    setPassword,
  } = useContext(SignInContext);

  return (
    <SignInContainer container>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/forklift.png" alt="" />

      <SignInGrid item md={6}>
        <SignInAvatar />
        <PageTitle title="Fazer Login" />
        <TextField
          fullWidth
          label="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <AppButton
          loading={loading}
          disabled={disabled}
          text="Entrar"
          onClick={handleSignIn}
        />
      </SignInGrid>
    </SignInContainer>
  );
};

export { SignIn };
