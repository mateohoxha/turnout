import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBEEKHJ9JyHsy-1GUK7tJd_Jp9GwJ5N2uk",
  authDomain: "turnout-877b2.firebaseapp.com",
  databaseURL: "https://turnout-877b2.firebaseio.com",
  projectId: "turnout-877b2",
  storageBucket: "turnout-877b2.appspot.com",
  messagingSenderId: "84151033307",
  appId: "1:84151033307:web:9d48c7f38604a210"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const eventsRef = firebase.database().ref().child('events')