import axios from "axios";
import { printHome } from "../../main";

export const submitFormCreateEvent = async (formId, url) => {
  const form = document.getElementById(formId);

  const errorMessageElement = document.createElement("p");
  errorMessageElement.classList.add("message-error");
  errorMessageElement.textContent = "";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const token = localStorage.getItem("token");

    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Event Created");
      printHome();
    } catch (error) {
      errorMessageElement.textContent = error.response.data.error;
    }
  });
  form.appendChild(errorMessageElement);
};
