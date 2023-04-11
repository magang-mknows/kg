export type TLoginData = {
  refresh_token: string;
  access_token: string;
};

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TRegisterPayload = {
  full_name: string;
  user_name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type TLoginResponse = TLoginData;
