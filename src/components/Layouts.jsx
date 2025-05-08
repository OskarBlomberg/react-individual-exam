import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

export default function Layouts() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
