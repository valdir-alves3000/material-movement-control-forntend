import axios from "axios";

const apiApp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_APP,
});

const apiTwilio = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_TWILIO,
});

export { apiApp, apiTwilio };
