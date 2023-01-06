import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBcFFJy1Sc-uogVW0-GcJAvmiyGn0wcwf4',
  authDomain: 'codingninjas-cc154.firebaseapp.com',
  projectId: 'codingninjas-cc154',
  storageBucket: 'codingninjas-cc154.appspot.com',
  messagingSenderId: '349453145759',
  appId: '1:349453145759:web:8ef2a049863da8a29cb4aa',
  measurementId: 'G-S5HPG9GV02',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
