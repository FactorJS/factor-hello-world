import { routes } from "./routes";
import { UserConfigApp } from "@factor/types";

export const setup = (): UserConfigApp => {
  return {
    routes,
    plugins: [],
  };
};
