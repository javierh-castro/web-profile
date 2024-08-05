import { NextResponse } from 'next/server';
import resend from '../../../lib/resend';

export async function POST(request) {
  const { to, subject, text } = await request.json();

  try {
    const response = await resend.emails.send({
      from: 'javi2cc1@gmail.com',
      to: 'javi2cc1@gmail.com',
      subject,
      text,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
