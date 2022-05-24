import { AppButton } from "@components/AppButton/AppButton";
import { PageTitle } from "@components/data-display/PageTitle/PageTitle";
import {
  SignInAvatar,
  SignInContainer,
  SignInGrid,
} from "@components/Users/SignIn/SignIn.style";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { CreateUserContext } from "contexts/CreateUserContext";
import { useContext } from "react";

const CreateUser = () => {
  const {
    admin,
    disabled,
    handleCreateUser,
    loading,
    name,
    password,
    setName,
    setPassword,
    toggleAdmin,
  } = useContext(CreateUserContext);

  return (
    <SignInContainer container>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/forklift.png" alt="" />

      <SignInGrid item md={6}>
        <SignInAvatar />
        <PageTitle title="Cadastrar Usuário" />
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
        <FormControlLabel
          style={{ width: "98%" }}
          label="Admin"
          control={<Checkbox value={admin} onChange={toggleAdmin} />}
        />

        <AppButton
          loading={loading}
          disabled={disabled}
          text="Cadastrar"
          onClick={handleCreateUser}
        />
      </SignInGrid>
    </SignInContainer>
  );
};

export { CreateUser };
