import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import auth from "./Firebase/Firebase.init";

const RequireAuth = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  const sendState = {
    pathname,
    courseId: state?.courseId,
  };

  //current user set up
  useEffect(() => {
    const user = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
    });

    return () => user;
  }, []);

  // console.log(location);
  if (!currentUser.uid) {
    navigate("/login", { state: sendState });
  }

  return children;
};

export default RequireAuth;
