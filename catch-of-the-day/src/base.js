import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB9qMmYVTZ52Zbt1N8V8hB_MKDcIDPMQXI",
        authDomain: "catch-of-the-day-tutoria-d471a.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-tutoria-d471a.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
