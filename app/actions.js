"use server"
const axios = require("axios");
export async function getOdcinki() {
    const response = await axios.get(process.env.NEXT_PUBLIC_ODCINKI,{revalidate: 360});
    return response.data;
  };