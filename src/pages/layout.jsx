import NavLayout from "@/components/common/NavLayout/NavLayout";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <NavLayout>
      <Outlet />
    </NavLayout>
  );
};

export default Layout;
