import './MainSectionTwo.css';

export const MainSectionTwo = () => {
    const main = document.querySelector("main");
    main.innerHTML += `
    <section id="events">
        <div class="container">
            <h2 class="events-title-section">Explore our EvenTS</h2>
            <div class="ev-events-container"></div>
        </div>
    </section>
    `
}