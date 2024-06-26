
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { email } = await req.json();
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const MailchimpKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
  const MailchimpServer = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER;
  const MailchimpAudience = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;

  const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

  const response = await fetch(customUrl, {
    method: "POST",
    headers: {
      Authorization: `apikey ${MailchimpKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });
  const received = await response.json();
  return NextResponse.json(received);
}