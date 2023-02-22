import React, { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

/*
 * @Date: 2023-02-22 20:09:00
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-22 23:04:29
 * @FilePath: \Jira\src\context\index.tsx
 * @Description: 
 */


export const AppProviders = ({children}:{children:ReactNode}) => {
    return <AuthProvider >
        {children}
    </AuthProvider>
}