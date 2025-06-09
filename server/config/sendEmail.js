import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.RESEND_API_KEY) {
  console.log('RESEND_API_KEY is not defined in the environment variables.');
}

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({to, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'KwiK <onboarding@resend.dev>',
      to: to,
      subject: subject,
      html: html,
    });
    
    if (error) {
      return console.error('Error sending email:', error);
    }
    return data;
  } catch (error) {
    console.log('Error in sendEmail function:', error);
  }
}
export default sendEmail;