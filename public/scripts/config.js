import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCjQa96eWB9srGUPWTKA26PgGV9AQp4gCI",
authDomain: "rafael-personal-site.firebaseapp.com",
projectId: "rafael-personal-site",
storageBucket: "rafael-personal-site.appspot.com",
messagingSenderId: "959047563580",
appId: "1:959047563580:web:1ec0af270ae3f03b664639",
measurementId: "G-HD98YBG4DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);