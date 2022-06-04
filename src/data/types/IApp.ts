import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IPageTitle {
  title: string;
}

export interface ITypographyLink {
  text: string;
  href: string;
}

export interface ILayout {
  children: ReactNode;
}

export interface IAppContext {
  dark: boolean;
  token: string;
  adminActive: boolean;

  handleSetDark: () => void;
  toggleAdminActive: (admin: boolean) => void;
  toggleToken: (token: string) => void;
  formatDate: (date: string) => string;
}

export interface IAppProvider {
  children: ReactNode;
}

export interface ICreateUserContext {
  admin: boolean;
  disabled: boolean;
  loading: boolean;
  name: string;
  password: string;

  setName: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  handleCreateUser: () => void;
  toggleAdmin: () => void;
}

export interface ICreateUserProvider {
  children: ReactNode;
}

export interface ISignInContext {
  disabled: boolean;
  loading: boolean;
  name: string;
  password: string;

  setName: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  handleSignIn: () => void;
}

export interface ISignInProvider {
  children: ReactNode;
  cookies: {
    token: string;
    adminActive: boolean;
  };
}

export interface IUser {
  id: string;
  name: string;
  admin: boolean;
  created_at: string;
  updated_at: string;
}

export interface IUserService {
  token: string;
  name: string;
  password: string;
  admin: boolean;
}

export interface IUserResponse {
  users: IUser[];
}

export interface IProductRequest {
  token: string;
  material: string;
  storage_location?: string;
  status?: string;
  description: string;
  quantity: number;
  locked?: boolean;
  expiration_date: string;
  expiry_date_after_opening: number;
}

export interface IProductResponse {
  id: string;
  material: string;
  storage_location: string;
  status: string;
  description: string;
  quantity: number;
  locked: boolean;
  created_by_user: string;
  updated_by_user: string;
  expiration_date: string;
  expiry_date_after_opening: number;
  created_at: string;
  updated_at: string;
}

export interface IProductListResponse {
  products: IProductResponse[];
}

export interface IExpirationDate {
  id: string | null;
  description: string | null;
  material: string | null;
  expiration_date: string | null;
  expiry_date_after_opening: string | null;
}

export interface IStorageProductContext {
  idProduct: string;
  disabled: boolean;
  loading: boolean;
  storageLocation: string;

  setStorageLocation: Dispatch<SetStateAction<string>>;
  setIdProduct: Dispatch<SetStateAction<string>>;
  confirmPosition: () => void;
}

export interface IStorageProductProvider {
  children: ReactNode;
}

export interface IAppButton {
  text: string;
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
}

export interface IReceiveProductInformation {
  phone: number;
  expirationDateMessage: string;
  expiryDateAfterOpeningMessage: number;
  open_product: boolean;
}

export interface ICreateMessageTwilioContext {
  receiveProductInformation: ({
    expirationDateMessage,
    expiryDateAfterOpeningMessage,
    phone,
    open_product,
  }: IReceiveProductInformation) => void;
}

export interface ICreateMessageTwilioProvider {
  children: ReactNode;
}

export interface IAppCard {
  title: string;
  icon: ReactNode;
  hrefCreate: string;
  hrefDelete: string;
  hrefList: string;
  hrefUpdate: string;
}
