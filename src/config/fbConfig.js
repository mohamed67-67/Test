import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAXV16ysF7SopK8Dx8aY8ney3ZD5ak2B2s",
    authDomain: "task-85a7a.firebaseapp.com",
    projectId: "task-85a7a",
    storageBucket: "task-85a7a.appspot.com",
    messagingSenderId: "204231047133",
    appId: "1:204231047133:web:7f8219c04722515f772834",
    measurementId: "G-MJQES60D6R"
};
  

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;



