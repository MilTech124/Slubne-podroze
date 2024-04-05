import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);

export async function POST(req, res) {
  const dataForm = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["miltech.matusiak@gmail.com"],
      subject: "data ze strony",
      react: (
        <>
          <h1>Wiadomość od {dataForm.name}</h1>
          <p>Email: {dataForm.email}</p>
          <p>Wiadomoś: {dataForm.message}</p>
         
        </>
      ),
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
