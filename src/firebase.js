// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-424310.firebaseapp.com",
  projectId: "insta-next-424310",
  storageBucket: "insta-next-424310.appspot.com",
  messagingSenderId: "731486164672",
  appId: "1:731486164672:web:f087f5c6b29e48bf3fff25",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read;
//       allow write: if
//       request.resource.size < 2 * 1024 * 1024 &&
//       request.resource.contentType.matches("image/.*")
//     }
//   }
// }
