import firebase from 'firebase';
require('@firebase/firestore')

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCYExC_beOUIqVs-J7SrU6f1I6CE0rtRVg",
  authDomain: "book-santa-fcfc6.firebaseapp.com",
  projectId: "book-santa-fcfc6",
  storageBucket: "book-santa-fcfc6.appspot.com",
  messagingSenderId: "360312572073",
  appId: "1:360312572073:web:092acf6882856651b301b8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
