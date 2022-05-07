import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IAppContext {
  adminActive: boolean;
  dark: boolean;
  token: string;

  handleSetDark: () => void;
  toggleAdminActive: (admin: boolean) => void;
  updateToken: (update_token: string) => void;
}

export interface IPageTitle {
  title: string;
}

export interface IAppProvider {
  children: ReactNode;
}

export interface ILayout {
  children?: ReactNode;
}

export interface ISignInContext {
  name: string;
  password: string;
  loading: boolean;
  disabled: boolean;
  setName: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  handleSignIn: () => void;
}

export interface IAppButton {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface IUser {
  name: string;
  password: string;
  token?: string;
  admin?: boolean;
}
