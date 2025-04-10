const admin = require("firebase-admin");
const serviceAccount = require("./weddy-cd4ac-firebase-adminsdk-fbsvc-c5b9f9c563.json"); // downloaded from Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
