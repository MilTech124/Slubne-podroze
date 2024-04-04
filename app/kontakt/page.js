import Form from '/components/kontakt/Form'
function page() {
  return (
    <div className="bg-[url('/baner.webp')] py-[15vh] flex flex-col justify-center items-center text-white">
      <h1 className='text-4xl font-bold'>Kontakt</h1>
      <p>Skontaktuj się z nami</p>     
      
      <Form /> 
    </div>
  )
}

export default page