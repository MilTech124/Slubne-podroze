
function Odcinek({ odcinek }) {
  return (
    <div className="flex gap-10 max-w-4xl">
      <a href={odcinek.link}>
        <img
          src={odcinek.image}
          className="min-w-[350px] h-[200px] overflow-hidden translate-x-2 hover:translate-x-0 transition-transform duration-500 ease-in-out"
          alt={odcinek.title}
        />
      </a>
      <div className="flex flex-col items-start justify-between">
        <h3 className="text-xl font-semibold">{odcinek.title}</h3>

        <p className="text-sm">{odcinek.description.slice(0, 200) + " ..."}</p>
        <a
          href={odcinek.link}
          className="text-xs text-neutral-500 hover:text-neutral-900 hover:font-medium"
        >
          {odcinek.link}
        </a>
      </div>
    </div>
  );
}

export default Odcinek;
