/*
 * @Date: 2023-02-22 23:34:34
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-22 23:52:40
 * @FilePath: \Jira\src\authenticated-app.tsx
 * @Description: 
 */
import { useAuth } from "context/auth-context"
import { ProjectListScreen } from "screens/project-list"

export const AuthenticatedApp = ()=>{
    const {logout} = useAuth()
    return <div>
        <button onClick={logout}>登出</button>
        <ProjectListScreen />
    </div>
}