import { useContext } from "react";
import { BreadcrumbContext } from "./BreadcrumbContext";

function useBreadcrumbContext() {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumbContext must be used within a Breadcrumbs component");
  }
  return context;
}

export default useBreadcrumbContext;
