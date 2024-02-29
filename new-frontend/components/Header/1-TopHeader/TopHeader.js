import './TopHeader.css'

export const TopHeader = () => {
    const header = document.querySelector('header');
    const userName = localStorage.getItem("userName");

    header.innerHTML += `
    <div class="ev-top-header-container">
        <p>Hello</p><span class="username">${userName ? userName : 'Guest'}</span>
    </div>`;
}