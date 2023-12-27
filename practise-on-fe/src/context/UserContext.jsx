import { createContext, useContext } from "react";

const UserContext = createContext()

export const useUserContext = () => {
      return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
      const user = { username: "John Doe", role: "Admin" }
      return (
            <UserContext.Provider value={user}>
                  {children}
            </UserContext.Provider>
      )
}