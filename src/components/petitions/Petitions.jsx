import axios from "axios";
import Swal from "sweetalert2";
const baseUrl = process.env.REACT_APP_BASE_URL;

async function GetPersonas() {
  try {
    const response = await axios({
      url: `${baseUrl}/`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return [];
}

async function PostPersonas() {
  try {
    const response = await axios({
      url: `${baseUrl}/`,
      method: "POST",
    });
    Swal.fire({
      title: "Hecho!",
      text: "La persona se agregó correctamente",
      icon: "succes",
      confirmButtonText: "Regresar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = "/";
      }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
  return [];
}

const petitions = { GetPersonas, PostPersonas };

export default petitions;
