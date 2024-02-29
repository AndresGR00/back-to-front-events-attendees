import axios from "axios";
import { printHome } from '../../main'

export const submitFormRegisterUser = async (formId, url) => {
  const form = document.getElementById(formId);

  const errorMessageElement = document.createElement("p");
  errorMessageElement.classList.add("message-error");
  errorMessageElement.textContent = "";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      alert("Registered User");
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.user.name);
      localStorage.setItem('userID', response.data.user._id);
      localStorage.setItem('rol', response.data.user.rol);
      printHome()
    } catch (error) {
      errorMessageElement.textContent = error.response.data.error;
    }
  });
  form.appendChild(errorMessageElement);
};
