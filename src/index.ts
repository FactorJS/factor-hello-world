import { UserConfigApp } from "@factor/api";

import { routes } from "./routes";

export const setup = (): UserConfigApp => {
  return {
    routes,
    plugins: [],
  };
};
