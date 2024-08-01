"use server";
import { Emails, EmailSchema } from "@/app/api/post/schema";
import nodemailer from "nodemailer";
export const sendVerificationEmail = async (EmailParsing: EmailSchema) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER, // Use your email as the sender
    to: process.env.NEXT_PUBLIC_EMAIL_USER, // Use your email as the recipient
    subject: `Message from ${EmailParsing.email}`,
    text: `You have received a new message from ${EmailParsing.nama} :\n\n${EmailParsing.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Sending To sent to ${EmailParsing.email}`);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Failed to send verification email");
  }
};

export async function SendEmail(formEntries: EmailSchema) {
  const EmailParsing = Emails.parse(formEntries);

  try {
    await sendVerificationEmail(EmailParsing);
    return { status: 201, message: "Email sent successfully!" };
  } catch (error) {
    return { status: 500, message: "Failed to send email. Please try again." };
  }
}
