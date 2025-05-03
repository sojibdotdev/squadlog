"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { name, email, subject, message } = formData;

    const data = await resend.emails.send({
      from: `Acme <${process.env.EMAIL_FROM!}>`,
      to: [`${email}`],
      subject: `New Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Email sending failed." };
  }
}
