import { deleteUser } from "../../services/api/deleteUser";
import "./user-attendant.css";

export const UserAttendant = (name, email, avatar, confirmedEvents, userId) => {
  const container = document.querySelector(".ev-allusers-container");

  const userContainer = document.createElement("div");
  userContainer.classList.add("user-container");

  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  const userAvatar = document.createElement("div");
  userAvatar.classList.add("user-avatar");

  const avatarImg = document.createElement("img");
  avatarImg.src = avatar;
  avatarImg.alt = name;

  const userInfo = document.createElement("div");
  userInfo.classList.add("user-info");

  const userName = document.createElement("div");
  userName.classList.add("user-name");
  userName.textContent = name;

  const userEmail = document.createElement("div");
  userEmail.classList.add("user-email");
  userEmail.textContent = email;

  userAvatar.appendChild(avatarImg);
  userInfo.appendChild(userName);
  userInfo.appendChild(userEmail);
  userCard.appendChild(userAvatar);
  userCard.appendChild(userInfo);

  userContainer.appendChild(userCard);

  if (confirmedEvents != undefined) {
    const userDetails = document.createElement("div");
    userDetails.classList.add("user-details");

    const ul = document.createElement("ul");

    confirmedEvents.forEach((confirmedEvent) => {
      const li = document.createElement("li");
      li.textContent = JSON.stringify(confirmedEvent.title);
      ul.appendChild(li);
    });
    userDetails.appendChild(ul);
    userContainer.appendChild(userDetails);
  }

  if (userId !== "65c569c67454eb0d104f4749") {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete This Person";
    deleteButton.classList.add("delete-button-users");
    deleteButton.addEventListener("click", () => {
      //Only works with users (attendees are in local)
      deleteUser(userId);
    });
    userContainer.appendChild(deleteButton);
  }

  container.appendChild(userContainer);
};
