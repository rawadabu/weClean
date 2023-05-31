import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyDe6kCwk7dbM9jkUEJZ0ehjv71NGHY2e-I',
    authDomain: 'we-clean-e6dab.firebaseapp.com',
    projectId: 'we-clean-e6dab',
    storageBucket: 'we-clean-e6dab.appspot.com',
    messagingSenderId: '1060169647124',
    appId: '1:1060169647124:web:bd877d35c85936b56fd301',
    measurementId: 'G-PTQV3FJDV9',
  },
};
export const app = initializeApp(environment.firebase);
export const db = getFirestore(app);
