import Image from "next/image";
function Odcinek({ odcinek }) {
  return (
    <div className="flex max-sm:flex-wrap items-center justify-center md:items-stretch md:gap-10 max-w-4xl">
      <a href={odcinek.acf.link}>
        <Image
          src={odcinek.acf.obraz}
          width={350}
          height={200}
          className="min-w-[350px] h-[200px] overflow-hidden md:translate-x-2 hover:translate-x-0 transition-transform duration-500 ease-in-out"
          alt={odcinek.title}
        />
      </a>
      <div className="flex flex-col items-start max-sm:px-5 justify-between">
        <h3 className="text-xl font-semibold">{odcinek.acf.tytul}</h3>

        <p className="text-sm">{odcinek.acf.text.slice(0, 200) + " ..."}</p>
        <a
          href={odcinek.link}
          className="text-xs text-neutral-500 transition-all hover:text-neutral-900 hover:font-medium"
        >
          {odcinek.link}
        </a>
      </div>
    </div>
  );
}

export default Odcinek;
