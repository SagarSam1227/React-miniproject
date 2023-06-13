import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "",
    username: "",
    contact: "",
  },
});

export default userContext;
