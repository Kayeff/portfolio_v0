import { config } from "dotenv";

config({ path: `.env.local` });

export const { RESEND_EMAIL_API_KEY } = process.env;
