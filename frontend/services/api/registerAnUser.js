import axios from "axios";

export const submitFormRegisterUser = async (formId, url) => {
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
      alert("Registered User");
    } catch (error) {
      alert('This user is already registered')
    }
  });
};
