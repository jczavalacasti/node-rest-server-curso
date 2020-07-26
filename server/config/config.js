// To declare global const and variables

// =========================
// Puerto
// Obtenemos el puerto en el que esta corriendo la app o damos un valor por default
// =========================
process.env.PORT = process.env.PORT || 3000;


// =========================
// Entorno
// =========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =========================
// Base de Datos
// =========================
let urlDB;

// if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://localhost:27017/cafe';
// } else {
urlDB = 'mongodb+srv://cafe-user:admin123@cluster0.ksss7.mongodb.net/cafe?retryWrites=true&w=majority';
// }

process.env.URLDB = urlDB;