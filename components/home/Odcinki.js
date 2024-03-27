"use client"
import Odcinek from "./Odcinek";
import { useState } from "react";


function Odcinki() {
    const [Number, setNumber] = useState([4]);

    const getMore = () => {
        setNumber(Number + 4);       
        window.location.href = "#odcinki";
    
    }


    const odcinki = [
        {
            id: 1,
            title: 'Odcinek 1',
            image: "https://picsum.photos/seed/picsum/400/300",
            description: 'Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the grand strategy the fundamental problem the high performance of The Efficiency of Corresponding Origin',
            link: 'https://www.youtube.com/watch?v=6v2L2UGZJAM'
        },
        {
            id: 2,
            title: 'RoY-Góralski rytm',
            image: "https://picsum.photos/seed/picsum/400/300",
            description: 'Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the grand strategy the fundamental problem the high performance of The Efficiency of Corresponding Origin',
            link: 'https://www.youtube.com/watch?v=6v2L2UGZJAM'
        },
        {
            id: 3,
            title: 'RoY-Karcma pod ryglami',
            image: "https://picsum.photos/seed/picsum/400/300",
            description: 'Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the grand strategy the fundamental problem the high performance of The Efficiency of Corresponding Origin',
            link: 'https://www.youtube.com/watch?v=6v2L2UGZJAM'
        },
        {
            id: 4,
            title: 'Odcinek 4',
            image: "https://picsum.photos/seed/picsum/400/300",
            description: 'Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the grand strategy the fundamental problem the high performance of The Efficiency of Corresponding Origin',
            link: 'https://www.youtube.com/watch?v=6v2L2UGZJAM'
        }
        ,{
            id: 5,
            title: 'Odcinek 5',
            image: "https://picsum.photos/seed/picsum/400/300",
            description: 'Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the grand strategy the fundamental problem the high performance of The Efficiency of Corresponding Origin',
            link: 'https://www.youtube.com/watch?v=6v2L2UGZJAM'
        },{
            id: 6,
            title: 'Odcinek 6',
            image: "https://picsum.photos/seed/picsum/400/300",
            description: 'Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the grand strategy the fundamental problem the high performance of The Efficiency of Corresponding Origin',
            link: 'https://www.youtube.com/watch?v=6v2L2UGZJAM'
        },{
            id: 7,
            title: 'Odcinek 7',
            image: "https://picsum.photos/seed/picsum/400/300",
            description: 'Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the grand strategy the fundamental problem the high performance of The Efficiency of Corresponding Origin',
            link: 'https://www.youtube.com/watch?v=6v2L2UGZJAM'
        },{
            id: 8,
            title: 'Odcinek 8',
            image: "https://picsum.photos/seed/picsum/400/300",
            description: 'Moreover, the utilization of the mechanism should help in resolving present challenges. What is more, the raw draft of the grand strategy the fundamental problem the high performance of The Efficiency of Corresponding Origin',
            link: 'https://www.youtube.com/watch?v=6v2L2UGZJAM'
        }
    ];
  return (
    <div className="container py-10 mx-auto flex flex-col items-center " id="odcinki">
        <h2>Odcinki</h2>
        <div className="justify-center items-center flex flex-col-reverse gap-10">

            {odcinki.slice(0, Number).map(odcinek => (
                <Odcinek key={odcinek.id} odcinek={odcinek} />
            ))}
        </div>
        <button onClick={getMore} className="mt-10 primary" > Więcej </button>

    </div>
  )
}

export default Odcinki