import Sidebar from "../sidebar/Sidebar";
import SlideBar from "../Slidebar/SlideBar";
import Topbar from "../topbar/Topbar";
import TopbarMb from "../topbar/TopbarMb";
import "./header.css";
import Menu from "./Menu";

export default function Header() {
  return (
    <>
      <header className="header">
        {/* topbar */}

        {/* end-Topbar */}
        <Menu />
        <Sidebar />
      </header>
      {/* <SlideBar /> */}
    </>
  );
}
