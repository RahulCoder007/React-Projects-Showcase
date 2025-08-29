import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const authStatus = useSelector((state) => state.auth.status); //status coming from "auth" slice
  console.log("authstatus & authentication above", authStatus, authentication);
  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      //if =>authstatus false
      console.log(
        "authentication && authStatus !== authentication",
        authentication && authStatus !== authentication
      );
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      //if=> authstatus true
      console.log(
        "!authentication && authStatus !== authentication",
        !authentication && authStatus !== authentication
      );
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
