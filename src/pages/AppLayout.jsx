// REACT & LIBRARIES
import { Outlet } from "react-router-dom";

// UI COMPONENTS
import { Navbar, Footer } from "../ui";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
