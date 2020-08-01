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
// Vencimiento del token
// 60 segundos
// 60 minutos
// 24 hrs
// 30 días
// =========================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =========================
// SEED de autenticación
// =========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =========================
// Base de Datos
// =========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// =========================
// Google client ID
// =========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '474824815632-9nr6alp0lh1otm7coi4ur8nrvmtuq5tr.apps.googleusercontent.com';