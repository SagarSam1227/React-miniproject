import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Sagar Sam",
    email: "sagar@gmail.com",
  },
});

export default userContext;
