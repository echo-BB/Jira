/*
 * @Date: 2023-01-15 15:05:15
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-01-15 15:17:53
 * @FilePath: \jira\src\screens\project-list\search-panel.jsx
 * @Description: 
 */
import { useState } from "react"

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name:'',
        personId: ''
    })
    const [users, setUsers] = useState([]) 
    return <form>
        <div>
            <input type="text" value={param.name} onChange={evt=>setParam({
                ...param,
                name: evt.target.value
            })} />
            <select value={param.name} onChange={evt=>setParam({
                ...param,
                personId: evt.target.value
            })}>
                <option value={''}>负责人</option>
                <option value={''}>负责人</option>
            </select>
        </div>
    </form>
}