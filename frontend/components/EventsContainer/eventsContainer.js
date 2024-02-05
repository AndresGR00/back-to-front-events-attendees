import './eventsContainer.css';

export const EventsContainer = () => {
    const app = document.querySelector('#app');

    const eventsContainer = document.createElement('div');
    eventsContainer.className = 'ev-events-container';

    app.appendChild(eventsContainer)
}