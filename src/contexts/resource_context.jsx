// REACT & LIBRARIES
import { useContext, createContext, useState } from "react";

// HOOKS
import { useGetResources } from "../hooks";

const ResourceContext = createContext();

export const ResourceProvider = ({ children }) => {
  const { resources: resourcesApi, isPending } = useGetResources();

  const [resources] = useState(resourcesApi || []);

  const value = {
    resources,
    isPending,
  };

  return (
    <ResourceContext.Provider value={value}>
      {children}
    </ResourceContext.Provider>
  );
};

export const useResourceContext = () => useContext(ResourceContext);
