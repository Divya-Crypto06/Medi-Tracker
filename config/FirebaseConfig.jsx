import { getAuth,initializeAuth,getReactNativePersistence} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyA9fzhDiPWui7iMB5r7JpQiRdGwBfSIjVo",
  authDomain: "reactnative-application-cd6a7.firebaseapp.com",
  projectId: "reactnative-application-cd6a7",
  storageBucket: "reactnative-application-cd6a7.firebasestorage.app",
  messagingSenderId: "958969869953",
  appId: "1:958969869953:web:cb02623bdd1d6406617f80",
  measurementId: "G-7HE43CQ7JV"
};
const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app)
export const auth=initializeAuth(app, {
  persistance:getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db=getFirestore(app)
