import "./registerForm.css";

export const RegisterForm = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.innerHTML += `<form id="registration-form" enctype="multipart/form-data">
    <input type="text" name="name" id="name" placeholder="Name" required>
    <input type="email" name="email" id="email" placeholder="Email" required>
    <input type="password" name="password" id="password" placeholder="Password" required>
    <input type="file" name="avatar" id="avatar" accept="image/*" required>
    <button type="submit">Submit</button>
  </form>
  `;
};
