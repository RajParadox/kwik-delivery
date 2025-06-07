import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);
if (!process.env.RESEND_API_KEY) {
  console.log('RESEND_API_KEY is not defined in the environment variables.');
}
const sendEmail = async ({ from, to, subject, html }) => {
  try {
    const response = await resend.emails.send({
      from: 'KwiK <onboarding@resend.dev>',
      to: to,
      subject: subject,
      html: html,
    });
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
  if (error) {
    return console.error({ error });
  }
};
(async function () {
  const { data, error } = await sendEmail({
    from: 'KwiK <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();

export default sendEmail;