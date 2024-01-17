// REACT & LIBRARIES
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// PAGES
import {
  Home,
  Chat,
  ContactUs,
  Login,
  Signup,
  Account,
  AboutUs,
  Resource,
  LostPet,
  AppLayout,
  ProfileUpdate,
  FoundPet,
  ReunitedPet,
  PetDetail,
  ReportPet,
  UpdatePet,
  Email,
} from "./pages";

// UI COMPONENTS
import { PageNotFound, Map } from "./ui";
import { getAllResources } from "./services";
import { useEffect } from "react";

// CONTEXTS
import { ChatProvider } from "./contexts";

// TANSTACK QUERY
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["resources"],
      queryFn: getAllResources,
      staleTime: 3600000,
    });
  }, []);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/map", element: <Map /> },
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
          path: "/report/:petId",
          element: <UpdatePet />,
        },
        {
          path: "/report",
          element: <ReportPet />,
        },
        {
          path: "/resources",
          element: <Resource />,
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
          element: <Chat />,
        },
        {
          path: "/email",
          element: <Email />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
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

      <ChatProvider>
        <RouterProvider router={router} />
      </ChatProvider>

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
