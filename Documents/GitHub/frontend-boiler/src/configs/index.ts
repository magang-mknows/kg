const configs = {
  env: process.env.NEXT_PUBLIC_ENV || "",
  host: process.env.NEXT_PUBLIC_HOST || "",
  apiURL: process.env.NEXT_PUBLIC_API_URL || "",
  googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
};

export default configs;
