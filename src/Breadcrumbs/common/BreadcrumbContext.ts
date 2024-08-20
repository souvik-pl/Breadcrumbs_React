import { createContext } from "react";
import { BreadcrumbContextType } from "./common.type";

export const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);
