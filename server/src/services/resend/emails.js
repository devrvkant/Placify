import { resend, sender } from "./resend.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, fullName, verifyUrl) => {
  const recipient = [email];
  const personalizedVerificationEmail = VERIFICATION_EMAIL_TEMPLATE
  .replace(/{{APP_NAME}}/g, "Placify")
  .replace(/{{FULL_NAME}}/g, fullName)
  .replace(/{{VERIFY_URL}}/g, verifyUrl)
  .replace(/{{SUPPORT_EMAIL}}/g, "mail.devrvkant.jangir.me")
  .replace(/{{LOGO_URL}}/g, "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/android-webview-dev/android-webview-dev_24x24.png")
  .replace(/{{YEAR}}/g, new Date().getFullYear());

  try {
    const { data, error } = await resend.emails.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email",
      html: personalizedVerificationEmail,
    });

    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("Error in sending verification email : ", err.message);
    throw new Error(err.message);
  }
};
