/api/auth/register: Permite el registro de nuevos usuarios. ✔️
/api/auth/login: Maneja la autenticación y emite tokens JWT. ✔️

/api/events: Ofrece la lista de eventos disponibles. ✔️
/api/events/:id: Proporciona detalles de un evento específico. ✔️
/api/user/events: Permite a los usuarios crear nuevos eventos. ✔️ <!-- Con auth -->
/api/user/attendees/:eventId: Permite a los usuarios confirmar asistencia a un evento.✔️

/api/attendees: Ofrece la lista de asistentes registrados. ✔️
/api/attendees/:id: Proporciona detalles de un asistente específico. ✔️

<!-- Puedo tener usuarios (que pueden asistir a eventos o no)
     Puedo tener asistentes a eventos (pero que no estén registrados como users
     En los eventos tengo un array de los asistentes que van
) -->