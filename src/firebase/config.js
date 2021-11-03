import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwvoOlHMR2QwJ2Rjvw_QrRZg-dEfDk8fU",
    authDomain: "spotifyclone-bdfdd.firebaseapp.com",
    projectId: "spotifyclone-bdfdd",
    storageBucket: "spotifyclone-bdfdd.appspot.com",
    messagingSenderId: "798302444843",
    appId: "1:798302444843:web:13d563227aef50ba86f96e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export { firebaseApp, auth }
