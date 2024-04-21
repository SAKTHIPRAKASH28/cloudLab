
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyAQntgIHdLJGLrYGwgbTufK1dLveD4tfP4",
  authDomain: "azhiermers.firebaseapp.com",
  databaseURL: "https://azhiermers-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "azhiermers",
  storageBucket: "azhiermers.appspot.com",
  messagingSenderId: "398935100254",
  appId: "1:398935100254:web:03c8fbb545fae471ba5dcf",
  measurementId: "G-L9B0JGX5W6"
};

const app =initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app
