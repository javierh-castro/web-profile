import Email from '../../../emails/email-template'; 
import resend from '../../../lib/resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();

  try {
    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['javi2cc1@gmail.com'],
      subject: 'Nuevo mensaje la pagina: https://javiercastro-porfolio.vercel.app/ ',
      react: Email({ name, email, message }),
      text: '',
    });
    return NextResponse.json({ success: true, response });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
