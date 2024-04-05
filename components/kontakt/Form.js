"use client"
function form() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get("name")
    const email = data.get("email")
    const message = data.get("message")

    fetch("/api/resend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          alert("Wiadomość została wysłana")
        } else {
          alert("Wystąpił błąd podczas wysyłania wiadomości")
        }
      })
  }
  

  return (
    <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Imię i nazwisko"
            required
            className="w-[350px] border border-natural-200 px-7 py-4 text-black "
        />
        <input
            type="email"
            name="email"
            placeholder="Twój email"
            required
            className="w-[350px] border border-natural-200 px-7 py-4 text-black "
        />
        <textarea
            name="message"
            placeholder="Wiadomość"
            required
            className="w-[350px] border border-natural-200 px-7 py-4 text-black "
        />
        <button className="w-[350px] border border-natural-200 px-7 py-4 hover:bg-white/50 ">Wyślij</button>
    </form>
  )
}

export default form