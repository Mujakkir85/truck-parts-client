// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBi_ecmMGnsiyOQX73yNelUctntq-9vkFs",
//     authDomain: "truck-parts-13fe9.firebaseapp.com",
//     projectId: "truck-parts-13fe9",
//     storageBucket: "truck-parts-13fe9.appspot.com",
//     messagingSenderId: "1066827994090",
//     appId: "1:1066827994090:web:6653099cb79919f05ed893"
// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


/*
const firebaseConfig = {
    apiKey: "AIzaSyBi_ecmMGnsiyOQX73yNelUctntq-9vkFs",
    authDomain: "truck-parts-13fe9.firebaseapp.com",
    projectId: "truck-parts-13fe9",
    storageBucket: "truck-parts-13fe9.appspot.com",
    messagingSenderId: "1066827994090",
    appId: "1:1066827994090:web:6653099cb79919f05ed893"
};*/