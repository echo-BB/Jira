/*
 * @Date: 2023-01-15 15:05:15
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-01-15 21:23:58
 * @FilePath: \Jira\src\screens\project-list\search-panel.jsx
 * @Description: 
 */
import { useEffect, useState } from "react"

export const SearchPanel = (props) => {
    const {param, setParam,users} = props


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
                {
                    users.map((user,index) => 
                    <option value={user.id} key={index}>
                        {user.name}
                    </option>)
                }
            </select>
        </div>
    </form>
}