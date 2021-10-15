import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase.config";

const initAutentication = () => {
  initializeApp(firebaseConfig);
};

export default initAutentication;
