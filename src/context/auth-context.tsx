/*
 * @Date: 2023-02-22 17:56:04
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-22 23:55:37
 * @FilePath: \Jira\src\context\auth-context.tsx
 * @Description: 
 */
import React, { ReactNode, useState } from "react";
import * as auth from "auth-provider";
import { User } from "screens/project-list/search-panel";

const AuthContext = React.createContext<{
    user:User|null,
    register:(form:AuthForm) => Promise<void>,
    login:(form:AuthForm) => Promise<void>,
    logout:() => Promise<void>,
}|undefined>(undefined)
AuthContext.displayName = 'AuthContext'
interface AuthForm {
    username:string,
    password:string
}

export const AuthProvider = ({children}:{children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    // point free
    const login = (form:AuthForm) => auth.login(form).then( user => setUser(user))
    const register = (form:AuthForm) => auth.register(form).then( user => setUser(user))
    const logout = () => auth.logout().then(()=>setUser(null))
    

    return <AuthContext.Provider children={children} value={{user, login, register, logout}} />
}

export const useAuth = ()=>{
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth必须在AuthProvider中使用");
    }
    return context
};