import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientSecret: "",
      clientId: process.env.COGNITO_CLIENT_ID ?? "",
      issuer: `https://cognito-idp.${process.env.COGNITO_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`,
      checks: ["pkce", "nonce", "state"],
      authorization: {
        params: { scope: "openid aws.cognito.signin.user.admin" },
      },
      client: {
        token_endpoint_auth_method: "none",
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
