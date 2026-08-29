import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main className="container min-h-screen p-5 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
