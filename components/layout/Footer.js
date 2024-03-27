const Footer = () => {
  const socials = [
    {
      name: "Youtube",
      icon: "/Youtube_logo.png",
      link: "#",
    },
    {
      name: "Facebook",
      icon: "/Facebook.png",
      link: "#",
    },
    {
      name: "Tictok",
      icon: "/tic-toc.png",
      link: "#",
    },
    {
      name: "Instagram",
      icon: "/insta.png",
      link: "#"
    },
  ];

  return (
    <>
      <footer className=" bg-neutral-100 w-full">
        <div className="container md:px-10 mx-auto flex justify-between ">
          <div className="flex flex-col gap-5 justify-center items-center max-w-[350px]">
            <img src="/logo.webp" width={200} alt="logo" />
            <p className="text-sm text-neutral-900">
              Zapraszamy do zagłębiania się w świat Ślubnych Podróży i
              odkrywania niezliczonych możliwości, jakie stwarza organizacja
              wyjątkowego ślubu i przyjęcia weselnego. Niech każda chwila tego
              magicznego dnia będzie niezapomniana!
            </p>
            <div className="flex w-full items-center justify-evenly">
              {socials.map((social) => (
                <a
                  href={social.link}
                  target="_blank"
                  className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  rel="noreferrer"
                >
                  <img src={social.icon} alt={social.name} width={40} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-left pb-0 font-medium text-neutral-500">
              {" "}
              Bądz na bierząco!
            </h3>
            <p className="text-neutral-500 pb-5">
              Zapisz się do naszego newsletera
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-neutral-300"
              />
              <button className="bg-primary-500 neutral-300 text-p-2 p-2 border border-neutral-300">
                Subskrybuj
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl text-left pb-0 font-medium text-neutral-500">
              Przydatne linki
            </h3>
            <ul className="text-neutral-500 list-disc pt-5">
              <li>Polityka prywatności</li>
              <li>Video</li>
              <li>Aktualnosci</li>
              <li>Baza usług</li>
              <li>O nas</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
