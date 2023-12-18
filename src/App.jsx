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
  Resource,
  ResourceDetail,
  LostPet,
  AppLayout,
  ProfileUpdate,
  FoundPet,
  ReunitedPet,
  PetDetail,
} from "./pages";

// UI COMPONENTS
import { PageNotFound } from "./ui";

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
      element: <AppLayout />,
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
          element: <LostPet />,
        },
        {
          path: "/found-pets",
          element: <FoundPet />,
        },
        {
          path: "/reunited-pets",
          element: <ReunitedPet />,
        },
        {
          path: "/pet/:petId",
          element: <PetDetail />,
        },
        {
          path: "/pet/update/:petId",
          element: <h1>Update Pet Page</h1>,
        },
        {
          path: "/register-pet",
          element: <h1>Register Pet Page</h1>,
        },
        {
          path: "/resources",
          element: <Resource />,
        },
        {
          path: "/resources/:resourceId",
          element: <ResourceDetail />,
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
          path: "/account/update",
          element: <ProfileUpdate />,
        },
        {
          path: "/chat",
          element: <ChatMessage />,
        },
        // {
        //   path: "*",
        //   element: <PageNotFound />,
        // },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      {import.meta.env.MODE === "development" && (
        <div style={{ fontSize: "32px" }}>
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      )}

      <RouterProvider router={router} />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 4000 },
          error: { duration: 5000 },
          style: {
            fontSize: "3.5rem",
            maxWidth: "500px",
            padding: "16px 18px",
            backgroundColor: "#fff",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
