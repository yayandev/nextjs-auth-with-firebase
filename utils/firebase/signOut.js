import { getAuth, signOut } from "firebase/auth";
import firebase_app from "./config";
import nookies from "nookies";

const auth = getAuth(firebase_app);
export const LogOut = async () => {
  try {
    const result = await signOut(auth);
    nookies.destroy(null, "token", { path: "/" });
    return true;
  } catch (error) {
    return error;
  }
};
