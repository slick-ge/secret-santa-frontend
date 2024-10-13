"use client";

import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function Home() {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log("codeResponse", codeResponse);

      const tokenResponse = await axios.get(
        `${process.env.API_URL}/auth/google/callback?code=${codeResponse.code}`,
      );

      console.log("tokenResponse", tokenResponse);
    },
    flow: "auth-code",
  });

  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <button
        onClick={() => login()}
        type="button"
        className="px-4 py-2 rounded border"
      >
        login
      </button>
      <button
        onClick={() => googleLogout()}
        type="button"
        className="px-4 py-2 rounded border"
      >
        logout
      </button>
    </main>
  );
}
