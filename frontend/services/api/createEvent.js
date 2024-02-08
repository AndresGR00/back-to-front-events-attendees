import axios from "axios";

export const submitFormCreateEvent = async (formId, url) => {
  const form = document.getElementById(formId);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      console.log(response);
      alert("Event Created");
    } catch (error) {
      console.error(error);
    }
  });
};