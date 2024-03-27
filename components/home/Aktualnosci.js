import React from "react";
import Slider from "../home/Slider";

const Aktualnosci = () => {
  const aktualnosci = [
    {
      id: 1,
      image: "https://picsum.photos/seed/picsum/400/300",
      date: "2021-10-10",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/picsum/400/300",
      date: "2021-10-10",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/picsum/400/300",
      date: "2021-10-10",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/picsum/400/300",
      date: "2021-10-10",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
    },
    {
      id: 5,
      image: "https://picsum.photos/seed/picsum/400/300",
      date: "2021-10-10",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
    },
    {
      id: 6,
      image: "https://picsum.photos/seed/picsum/400/300",
      date: "2021-10-10",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
    },
  ];

  return (
    <section id="aktualnosci">
      <div className="flex flex-col py-10 items-center justify-center mx-auto">
        <h2 className="">Aktualnosci</h2>
        <Slider aktualnosci={aktualnosci} />
      </div>
    </section>
  );
};

export default Aktualnosci;
