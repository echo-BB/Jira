/*
 * @Date: 2023-01-15 15:04:34
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-07 17:33:19
 * @FilePath: \Jira\src\screens\project-list\list.tsx
 * @Description:
 */
import React from "react";
import { User } from "./search-panel";
interface Project{
  id:string;
  name:string;
  personId:string;
  pin:boolean;
  organization:string;
}
interface ListProps {
  list: Project[],
  users: User[]
}
export const List = (props:ListProps) => {
  const { list,users } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(users=>users.id === project.personId)?.name || '未知'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
