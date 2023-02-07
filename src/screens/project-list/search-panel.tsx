/*
 * @Date: 2023-01-15 15:05:15
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-07 17:33:32
 * @FilePath: \Jira\src\screens\project-list\search-panel.tsx
 * @Description: 
 */
import React from "react";
interface SearchPanelProps {
    users: User[],
    param:{
        name: string,
        personId: string;
    },
    setParam: (param:SearchPanelProps['param']) => void;
}
export interface User {
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string;
}

export const SearchPanel = (props:SearchPanelProps) => {
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