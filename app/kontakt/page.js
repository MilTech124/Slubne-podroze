import Form from "/components/kontakt/Form";
import Newsletter from "@/components/Newsleter";

function page() {
  return (
    <div className="bg-[url('/baner.webp')] bg-center bg-cover bg-no-repeat py-[15vh] flex flex-col justify-center items-center text-white">
      <div className="container">
        <h1 className="text-4xl font-bold">Kontakt</h1>
        <p className="py-2">
          Jesteśmy zespołem pasjonatów podróży, którzy z ogromną radością
          pomagają parom stworzyć niezapomniane chwile w ich życiu poprzez
          wyjątkowe podróże ślubne. Nasza firma specjalizuje się w tworzeniu
          spersonalizowanych, luksusowych podróży dla par pragnących
          zainaugurować swój związek małżeński w niezwykły sposób.
        </p>
        <p>
          Skontaktujcie się z nami, a nasz doświadczony zespół doradców podróży
          pomoże Wam zaplanować idealną podróż, dostosowaną do Waszych
          preferencji i wymagań. Niech nasza pasja do podróży stanie się częścią
          Waszej miłosnej historii. Czekamy na Wasze wiadomości!
        </p>
      </div>
      <div className="container flex-wrap  flex w-full justify-evenly items-center">
        <div className="w-1/2">
          <h3 className="text-white text-2xl">Dołącz do naszej społecznosci</h3>
          <Newsletter />
        </div>

        <div className="w-1/2">
        <h3 className="text-white text-2xl">Napisz do nas:</h3>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default page;
