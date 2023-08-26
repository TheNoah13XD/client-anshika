import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAILER_EMAIL,
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${text}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).end();
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).end();
  }
}
