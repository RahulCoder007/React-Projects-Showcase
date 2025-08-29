import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
// import conf from "./conf/conf"; //its mandatory to have env variable in string so even if it is number(by chance) then conf will take care of it
import { Header, Footer } from "./components/index";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log("userData::appjsx::useEffect", userData);
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
        console.log("appjsx", authService.getCurrentUser());
      });
  }, [dispatch]);
  // The dependency array [dispatch] is used because dispatch is a function from useDispatch (react-redux).
  // While dispatch is stable and doesn't change between renders, including it satisfies the exhaustive-deps rule of eslint.
  // This ensures that if dispatch ever changes (unlikely), the effect will re-run.
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-500">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />{" "}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
