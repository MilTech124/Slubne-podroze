"use client";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();    
    if (!email) {
      return alert("Email is required");
    }
    try{
        const response = await fetch("/resend", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        const data = await response.json();
        console.log("Data",data);
        if (data){
            alert("Dziękuję za subskrypcję!")
            setEmail("");
        }
    }
    catch(e){
        console.log(e);
    }
      alert("Dziękuję za subskrypcję!")
   
  };

  return (
    <form onSubmit={handleSubmit} className="z-0 flex gap-2 items-center justify-center">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Twój email"
        required
        className="w-[250px] border border-natural-200 px-7 py-4 text-black "
      />
      <button className=" border border-natural-200 px-7 py-4 ">Subskrybuj</button>
    </form>
  );
};

export default Newsletter;
