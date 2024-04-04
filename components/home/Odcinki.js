"use client";
import Odcinek from "./Odcinek";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { getOdcinki } from "@/app/actions";
const axios = require("axios");

// async function getOdcinki() {
//     const response = await axios.get(process.env.NEXT_PUBLIC_ODCINKI,{revalidate: 60});
//     return response.data;
//   };

function Odcinki() {
  const [Number, setNumber] = useState([4]);
  const [odcinki, setOdcinki] = useState([]);

  

  const getMore = () => {
    setNumber(Number + 4);
    window.location.href = "#odcinki";
  };

  // const getOdcinki = async () => {
  //   const response = await axios.get(process.env.NEXT_PUBLIC_ODCINKI,{revalidate: 60});
  //   return response.data;
  // };

  useEffect(() => {
    getOdcinki().then((data) => {
      setOdcinki(data);
      
    });
  }, []);

  return (
    <div
      className="container py-10 mx-auto flex flex-col items-center "
      id="odcinki"
    >
      <h2 className="max-sm:text-xl">Odcinki</h2>
      <div className="justify-center items-center flex flex-col-reverse gap-10">
        {odcinki.length === 0 && <p>Ładowanie...</p>}

        {odcinki &&
          odcinki.slice(0, Number).map((odcinek) => (
            <Fade key={odcinek.id}>
              <Odcinek odcinek={odcinek} />
            </Fade>
          ))}
      </div>
      <button onClick={getMore} className="mt-10 primary">
        Pokaż Więcej{" "}
      </button>
    </div>
  );
}

export default Odcinki;
