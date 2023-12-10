// REACT & LIBRARIES
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

// TANSTACK QUERY
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

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
      <QueryClientProvider client={queryClient}>
        {import.meta.env.MODE === "development" && (
          <div style={{ fontSize: "32px" }}>
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        )}

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
              fontSize: "3.5rem",
              maxWidth: "500px",
              padding: "16px",
              backgroundColor: "#fff",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
