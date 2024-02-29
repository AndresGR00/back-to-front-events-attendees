# EvenTS Project 🌟

## Description 📖

EvenTS is a web platform designed to facilitate the management of events, users and guests. It has a backend and frontend development.
We can find three models: events, users and attendees. All attendees logic are developed in the backend, but are not accessible from the frontend,
as they are shown as an example of use.
The business idea behind this is to allow people who are registered on the platform (users), who can be offered some benefit in addition to publishing new events, and people who are not registered, as guests and whose only interest is to attend a specific event, to sign up for events.

## To be taken into account

To be able to display the events in the Home page, they must first be created in the database:
![Events](https://res.cloudinary.com/dbinlquvz/image/upload/v1709233582/Proyecto_10/Readme/Captura_de_pantalla_2024-02-29_194548_icfpbq.png)

To be able to create events you must be registered on the platform. This unlocks this option under the header:
![Create Events](https://res.cloudinary.com/dbinlquvz/image/upload/v1709233582/Proyecto_10/Readme/Captura_de_pantalla_2024-02-29_194635_ro6zbj.png)

Once you are logged in as an administrator, you can access the administrator panel located in the footer:
![Admin panel link](https://res.cloudinary.com/dbinlquvz/image/upload/v1709233582/Proyecto_10/Readme/Captura_de_pantalla_2024-02-29_194647_ohed9t.png)

From here we can manage users and attendees:
![Admin panel](https://res.cloudinary.com/dbinlquvz/image/upload/v1709233582/Proyecto_10/Readme/Captura_de_pantalla_2024-02-29_194659_bohase.png)

Sample of attendees (Please note that this information does not come from the back and serves only as an example). To test the full functionality it has to be done with users.
![Admin panel](https://res.cloudinary.com/dbinlquvz/image/upload/v1709233583/Proyecto_10/Readme/Captura_de_pantalla_2024-02-29_194712_lsk173.png)




## Key Features 🚀

- Publish events
- Register and login with users
- Sign up for events
- Manage everything from the administrator panel
- Full CRUD for each model
- Fully responsive

## Installation and Usage 🛠️

To download and deploy the project, follow these simple steps:

1. Clone this repository to your local machine:

2. Run the following command in your console on both folders (backend and new-frontend):

   npm run dev

3. Explore and navigate the EvenTS app.

## Dependencies 📦

- bcrypt: 5.1.1
- cloudinary: 1.41.3
- cors: 2.8.5
- dotenv: 16.4.1
- express: 4.18.2
- jsonwebtoken: 9.0.2
- mongoose: 8.1.1
- multer: 1.4.5-lts.1
- multer-storage-cloudinary: 4.0.0
- axios: 1.6.7
- vite: 5.1.4

## License 📜

This project is under a Personal License.

