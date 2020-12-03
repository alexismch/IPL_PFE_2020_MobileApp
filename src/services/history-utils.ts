import type { History } from "history";

export const navigate = (history: History<unknown>, path: string) => {
  if (history.location.pathname !== path) history.push(path);
};
