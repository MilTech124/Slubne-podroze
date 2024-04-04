import React from "react";
import Slider from "../home/Slider";
import axios from "axios";

async function Aktualnosci(){
  // const aktualnosci = [
  //   {
  //     id: 1,
  //     image: "https://picsum.photos/seed/picsum/400/300",
  //     date: "2021-10-10",
  //     title: "Lorem ipsum dolor sit amet",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
  //   },
  //   {
  //     id: 2,
  //     image: "https://picsum.photos/seed/picsum/400/300",
  //     date: "2021-10-10",
  //     title: "Lorem ipsum dolor sit amet",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
  //   },
  //   {
  //     id: 3,
  //     image: "https://picsum.photos/seed/picsum/400/300",
  //     date: "2021-10-10",
  //     title: "Lorem ipsum dolor sit amet",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
  //   },
  //   {
  //     id: 4,
  //     image: "https://picsum.photos/seed/picsum/400/300",
  //     date: "2021-10-10",
  //     title: "Lorem ipsum dolor sit amet",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
  //   },
  //   {
  //     id: 5,
  //     image: "https://picsum.photos/seed/picsum/400/300",
  //     date: "2021-10-10",
  //     title: "Lorem ipsum dolor sit amet",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
  //   },
  //   {
  //     id: 6,
  //     image: "https://picsum.photos/seed/picsum/400/300",
  //     date: "2021-10-10",
  //     title: "Lorem ipsum dolor sit amet",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum id, fermentum ligula. Donec vel nunc nec massa ultrices lacinia. Proin et",
  //   },
  // ];

  async function getAktualnosci() {

    const response = await axios.get(process.env.NEXT_PUBLIC_AKTUALNOSCI);
    // console.log("aktualnosci",response.data);
    return response.data;
  }

  const aktualnosci = await getAktualnosci();





  return (
    <section id="aktualnosci">
      <div className="flex flex-col md:py-10 py-2  items-center justify-center mx-auto">
        <h2 className="max-sm:text-xl">Aktualnosci</h2>
        <Slider aktualnosci={aktualnosci} />
      </div>
    </section>
  );
};

export default Aktualnosci;
