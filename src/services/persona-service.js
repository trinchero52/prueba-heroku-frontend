import axios from "axios";

export async function getPersonas() {
  const response = await axios.get(`http://localhost:8080/personas`);
  return response;
}
