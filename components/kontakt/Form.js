

function form() {
  return (
    <form className="flex flex-col gap-2" action="">
        <input
            type="text"
            name="name"
            placeholder="Imię"
            required
            className="w-[250px] border border-natural-200 px-7 py-4 text-black "
        />
        <input
            type="email"
            name="email"
            placeholder="Twój email"
            required
            className="w-[250px] border border-natural-200 px-7 py-4 text-black "
        />
        <textarea
            name="message"
            placeholder="Wiadomość"
            required
            className="w-[250px] border border-natural-200 px-7 py-4 text-black "
        />
        <button className=" border border-natural-200 px-7 py-4 ">Wyślij</button>
    </form>
  )
}

export default form