// REACT & LIBRARIES
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// PAGES
import {
  Home,
  ChatMessage,
  ContactUs,
  Login,
  Signup,
  Account,
  AboutUs,
} from "./pages";

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
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
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
          element: <Account />,
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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
