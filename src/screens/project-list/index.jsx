/*
 * @Date: 2023-01-15 15:00:21
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-01-15 16:51:25
 * @FilePath: \Jira\src\screens\project-list\index.jsx
 * @Description: 
 */
import { List } from "./list"
import { SearchPanel } from "./search-panel"

export const ProjectListScreen = () => {
    return <div>
        <SearchPanel />
        <List />
    </div>
}