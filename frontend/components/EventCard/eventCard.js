import "./eventCard.css";

export const EventCard = (poster, title, description, location, date, usersConfirmed, attendeesConfirmed) => {
  const eventsContainer = document.querySelector(".ev-events-container");
  eventsContainer.innerHTML += `
  <div class="ev-event-card">
  <div class='main'>
    <img class='poster' src="${poster}" alt="${title}" />
    <h2>${title}</h2>
    <p class='description'>${description}</p>
    <div class='details'>
      <div class="location">
        <p>${location}</p>
      </div>
      <div class="date">
        <p>${date}</p>
      </div>
    </div>
    <div class='participants'>
      <p>${usersConfirmed}</p>
      <p>${attendeesConfirmed}</p>
    </div>
    <a href="#" class="join">Register</a>
  </div>
</div>`;
};
