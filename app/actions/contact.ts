"use server";
import { RESEND_EMAIL_API_KEY } from "@/config/env";
import { contactSchema } from "@/lib/validators/contact";
import { Resend } from "resend";

const resend = new Resend(RESEND_EMAIL_API_KEY);

export async function sendmail(data: unknown) {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid form data");
  }

  const { name, email, message } = parsed.data;

  await resend.emails.send({
    from: "Contact <onboarding@resend.dev>",
    to: ["kaifsaiyed896@gmail.com"],
    subject: `New message from ${name}`,
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });
}
