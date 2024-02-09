import axios from "axios";

export const submitFormCreateEvent = async (formId, url) => {
  const form = document.getElementById(formId);
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
      console.log(response);
      alert("Event Created");
    } catch (error) {
      console.error(error);
    }
  });
};
