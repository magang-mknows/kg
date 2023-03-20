/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/github";
import configs from "@/configs";
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

export async function refreshAccessToken(tokenObject: any): Promise<void> {
  try {
    const tokenResponse = await axios.post("" + "auth/refreshToken", {
      token: tokenObject.refreshToken,
    });

    return {
      ...tokenObject,
      accessToken: tokenResponse.data.accessToken,
      accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
      refreshToken: tokenResponse.data.refreshToken,
    };
  } catch (error) {
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    };
  }
}

const providers = [
  CredentialsProvider({
    name: "Credentials",
    authorize: async (credentials: any) => {
      try {
        const user = await axios.post("" + "auth/login", {
          password: credentials.password,
          email: credentials.email,
        });

        if (user.data.accessToken) {
          return user.data;
        }

        return null;
      } catch (e: any) {
        throw new Error(e);
      }
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    credentials: undefined,
  }),

  GoogleProvider({
    clientId: configs.googleClientId,
    clientSecret: configs.googleClientSecret,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
  }),
];

export const authOptions = {
  providers: [],
};

export default NextAuth(authOptions);
