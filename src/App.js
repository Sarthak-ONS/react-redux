import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import store from "./store/index";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header></Header>
      {isAuth && <UserProfile></UserProfile>}
      {!isAuth && <Auth></Auth>}
    </Fragment>
  );
}

export default App;
