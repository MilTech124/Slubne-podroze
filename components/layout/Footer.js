import Newsletter from "../Newsleter";

const Footer = () => {
  const socials = [
    {
      name: "Youtube",
      icon: "/Youtube_logo.png",
      link: "https://www.youtube.com/@slubnepodroze",
    },
    {
      name: "Facebook",
      icon: "/Facebook.png",
      link: "https://www.facebook.com/slubnepodroze",
    },
    {
      name: "Tictok",
      icon: "/tic-toc.png",
      link: "https://www.tiktok.com/@slubne.podroze",
    },
    {
      name: "Instagram",
      icon: "/insta.png",
      link: "https://www.instagram.com/slubne_podroze",
    },
    {
      name: "Twitter",
      icon: "/x.png",
      link: "https://twitter.com/SlubnePodroze",
    },
    {
      name: "Pinterest",
      icon: "/pin.png",
      link: "https://pin.it/2ZQfklCko",
    },
  ];

  const sendEmail = () => {
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <footer id="footer" className="bg-neutral-100 w-full">
        <div className="container md:px-10 py-10 mx-auto flex max-sm:flex-wrap max-sm:justify-center justify-between ">
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
                  key={social.name}
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

            <Newsletter />
          </div>
          <div className="hidden">
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
