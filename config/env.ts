import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { RESEND_EMAIL_API_KEY } = process.env;
