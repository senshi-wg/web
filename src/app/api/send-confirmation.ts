import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const data = await resend.emails.send({
        from: process.env.FROM_EMAIL!,
        to: email,
        subject: 'Welcome to the Senshi Waitlist!',
        html: `
          <h1>Welcome to Senshi!</h1>
          <p>Thank you for joining our waitlist. We'll notify you when you're approved to access the platform.</p>
        `,
      });

      res.status(200).json({ message: 'Confirmation email sent' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending confirmation email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}