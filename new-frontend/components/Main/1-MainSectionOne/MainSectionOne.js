import "./MainSectionOne.css";

export const MainSectionOne = () => {
  const main = document.querySelector("main");
  main.innerHTML += `
    <section id="hero">
        <div class="container">
            <h2>Welcome to EvenTS</h2>
            <p>The perfect platform to publish, register and manage events *</p>
            <a href="#events" class="btn">Explore Events</a>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <h2>About EvenTS</h2>
            <p>EvenTS is an online platform that allows you to explore a wide variety of events and activities, as well as publish your own events for others to discover and participate in.</p>
            <p>Whether you're looking for a concert, a conference, a cooking class or a sporting event, EvenTS offers you an easy way to find and participate in events that interest you.</p>
            <p>Join EvenTS today and start discovering exciting events in your area!</p>
            <p><strong>* To sign up for an event or post a new one you must be registered.</strong></p>
    </div>
    </section>
    `;
};
