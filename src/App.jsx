// REACT & LIBRARIES
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
import { Home, ChatMessage, ContactUs } from "./pages";

// FEATURES COMPONENTS (TEMPORAY, WILL DELETE LATER)
import { AboutUs } from "./features";

// UI COMPONENTS
import { Navbar, Footer } from "./ui";

function App() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <h1>Sign up</h1>,
        },
        {
          path: "/login",
          element: <h1>Login</h1>,
        },
        {
          path: "/lost-pets",
          element: <h1>Lost Pets</h1>,
        },
        {
          path: "/found-pets",
          element: <h1>Found Pets</h1>,
        },
        {
          path: "/reunited-pets",
          element: <h1>Reunited Pets</h1>,
        },
        {
          path: "/pet/:petId",
          element: <h1>Specific Pet Detail</h1>,
        },
        {
          path: "/pet/edit/:petId",
          element: <h1>Edit Pet Page</h1>,
        },
        {
          path: "/register-pet",
          element: <h1>Register Pet Page</h1>,
        },
        {
          path: "/resources",
          element: <h1>Resources</h1>,
        },
        {
          path: "/resources/:resourceId",
          element: <h1>Specific Resource Detail</h1>,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/account",
          element: <h1>Account Page</h1>,
        },
        {
          path: "/account/edit",
          element: <h1>Edit Account Page</h1>,
        },
        {
          path: "/chat",
          element: <ChatMessage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
