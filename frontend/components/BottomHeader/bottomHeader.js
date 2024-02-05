import './bottomHeader.css';

const postEventFunction = () => {
    console.log('Crear un evento');
}

export const BottomHeader = () => {
    const app = document.querySelector('#app');
    app.innerHTML += `
    <div class="ev-bottom-header-container">
    <p>Explore all our events or <a href="#" class="ev-post-event">create a new one</a></p>
  </div>`

  const postEventButton = document.querySelector('.ev-post-event');
  postEventButton.addEventListener('click', postEventFunction)
}