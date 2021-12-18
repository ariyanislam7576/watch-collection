import firebaseConfig from "./Firebase.Config";
import { initializeApp } from "firebase/app";
const initApp = () =>{
    initializeApp(firebaseConfig);
}
export default initApp