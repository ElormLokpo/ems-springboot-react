import { createContext } from "react";
import { IModalContext } from "./type";

export const ModalContext = createContext<IModalContext | null>(null);